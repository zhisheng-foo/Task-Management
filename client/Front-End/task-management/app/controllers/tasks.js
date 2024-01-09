import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TasksController extends Controller {
  @service globalState;
  @service router;

  @action
  goBack() {
    this.router.transitionTo('application');
  }
}
