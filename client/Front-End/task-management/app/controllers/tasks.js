import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class TasksController extends Controller {
  @service globalState;
}
