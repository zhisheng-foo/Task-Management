// app/controllers/view-task.js

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ViewTaskController extends Controller {
  @service taskData;
  @service router;

  @tracked taskTitle = '';
  @tracked taskAttributes = null;
  @tracked task = null;
  @tracked showTaskAttributes = false;
  @tracked isSuccessful = false;
  @tracked message = '';

  @action
  fetchTaskByTitle() {
      this.task = this.taskData.fetchTaskByTitle(this.taskTitle);
  }

  @action
  updateTaskTitle(event) {
    this.taskTitle = event.target.value;
  }

  @action
  async viewTask(event) {
    event.preventDefault();

    try {
      const task = await this.taskData.fetchTaskByTitle(this.taskTitle);
      if (task) {
        this.taskAttributes = {
          id: task.id,
          title: task.title,
          description: task.description,
          status: task.status,
          dueDate: task.dueDate,
          authorId: task.authorId,
        };
        this.showTaskAttributes = true;
        this.isSuccessful = true;
        this.message = 'Operation successful';
      } else {
        this.showTaskAttributes = false;
        this.isSuccessful = false;
        this.message = 'No such task in the database'; // No message is displayed
      }
    } catch (error) {
      console.error('Error fetching task:', error);
      this.showTaskAttributes = false;
      this.isSuccessful = false;
      this.message = 'There is some error, reload and try again';
    }
  }
  @action
  goBack() {
    this.taskTitle = '';
    this.taskAttributes = null;
    this.task = null;
    this.showTaskAttributes = false;
    this.isSuccessful = false;
    this.message = '';

    this.router.transitionTo('tasks');
  }
}
