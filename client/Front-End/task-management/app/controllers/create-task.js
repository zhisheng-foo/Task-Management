import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CreateTaskController extends Controller {
  @service router;
  @service createTask;
  @service globalState;

  @tracked title = '';
  @tracked description = '';
  @tracked status = 'todo';
  @tracked dueDate = '';
  @tracked authorId = this.globalState.authorId;
  @tracked message = '';
  @tracked isSuccessful = false;

  @action
  updateStatus(event) {
    this.status = event.target.value;
  }
  @action
  updateDueDate(event) {
    this.dueDate = event.target.value;
  }

  @action
  createNewTask(event) {
    event.preventDefault();

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const selectedDate = new Date(this.dueDate);

    if (this.title.trim() === '') {
      this.message = 'Title cannot be blank.';
      this.isSuccessful = false;
      return;
    } else if (this.dueDate.trim() === '') {
      this.message = 'Date cannot be blank.';
      this.isSuccessful = false;
      return;
    } else if (selectedDate < currentDate) {
      this.message = 'Due date cannot be in the past.';
      this.isSuccessful = false;
      return;
    }

    const taskData = {
      title: this.title,
      description: this.description,
      status: this.status,
      dueDate: this.dueDate,
      authorId: this.globalState.authorId,
    };

    this.createTask
      .createTask(taskData)
      .then((response) => {
        this.resetForm();
        this.message = 'Task successfully created.';
        this.isSuccessful = true;
      })
      .catch((error) => {
        console.error('Error creating task:', error);
        this.message = 'Failed to create task. Please try again.';
      });
  }

  @action
  resetForm() {
    this.title = '';
    this.description = '';
    this.message = '';
    this.status = 'todo';
    this.dueDate = '';
    this.isSuccessful = false;
  }

  @action
  cancelTaskCreation() {
    this.resetForm();
    this.router.transitionTo('tasks');
  }
}
