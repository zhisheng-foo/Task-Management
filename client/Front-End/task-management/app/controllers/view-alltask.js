import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ViewAllTaskController extends Controller {
  @tracked tasks = [];
}
