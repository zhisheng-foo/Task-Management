import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;
  @service authorRegistration;
  @service globalState;
  @tracked authorNameInput = '';
  @tracked loginMessage = '';
  @tracked isLoginSuccessful;

  @action
  login() {
    this.authorRegistration
      .checkAuthorExists(this.authorNameInput)
      .then((response) => {
        console.log('Login response:', response);
        if (response.exists.exists === true) {
          this.loginMessage = 'Login Successful';
          this.globalState.authorName = this.authorNameInput;
          this.globalState.authorId = response.exists.id;
          console.log(this.globalState.authorName , this.globalState.authorId);
          this.isLoginSuccessful = true;
          this.router.transitionTo('tasks');
        } else {
          this.loginMessage = 'No such Author! Please go register!';
          this.isLoginSuccessful = false;
        }
      })
      .catch((error) => {
        console.error('Error checking author:', error);
        this.loginMessage = 'Error occurred while checking author existence.';
        this.isLoginSuccessful = false;
      });
  }

  @action
  goToRegister() {
    this.router.transitionTo('register');
  }
}
