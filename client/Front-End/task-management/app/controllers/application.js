import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;
  authorName = '';

  @action
  login() {
    console.log('Logging in with name:', this.authorName);
    this.router.transitionTo('tasks');
  }

  @action
  goToRegister() {
    this.router.transitionTo('register');
  }
}
