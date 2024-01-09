import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ViewAllTaskController extends Controller {
  @tracked tasks = [];
  @service router;

  @action
  goBack() {
  
    this.router.transitionTo('tasks');
  }
}
