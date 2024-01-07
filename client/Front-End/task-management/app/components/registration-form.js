import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class RegistrationForm extends Component {
  @tracked authorName = '';
  @tracked registrationMessage = '';
  @tracked isSuccess = false;
  @service authorRegistration;

  @action
  updateAuthorName(event) {
    this.authorName = event.target.value;
  }

  @action
  registerAuthor() {
    this.authorRegistration
      .checkAuthorExists(this.authorName)
      .then((existsResponse) => {
        console.log('Exists response:', existsResponse.exists);
        if (existsResponse.exists.exists === true) {
          this.registrationMessage =
            'Author already exists, not creating a duplicate.';
          this.isSuccess = false;
        } else if (existsResponse.exists.exists === false) {
          console.log('Creating new author as it does not exist');
          this.authorRegistration
            .createAuthor({ name: this.authorName })
            .then(() => {
              this.registrationMessage = 'Author creation successful!';
              this.isSuccess = true;
            })
            .catch(() => {
              this.registrationMessage = 'Author creation failed!';
              this.isSuccess = false;
            });
        }
      })
      .catch(() => {
        alert('Error occurred while checking if author exists.');
      });
  }
}
