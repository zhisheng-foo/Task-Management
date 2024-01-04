import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;
  @service authorRegistration;
  @tracked authorName = '';
  @tracked loginMessage = ''; 
  @tracked isLoginSuccessful

  @action
  login() {
    this.authorRegistration.checkAuthorExists(this.authorName).then(response => {
      if (response.exists.exists === true) {
        this.loginMessage = 'Login Successful';
        this.isLoginSuccessful = true; 
        this.router.transitionTo('tasks');
      } else {
        this.loginMessage = 'No such Author! Please go register!';
        this.isLoginSuccessful = false;
        this.router.transitionTo('application'); 
      }
    }).catch(error => {
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
