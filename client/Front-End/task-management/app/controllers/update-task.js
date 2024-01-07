import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UpdateTaskController extends Controller {
  @service taskData;
  @service router;

  @tracked taskInput = ''; // Updated when typing in the input field
  @tracked task = null;
  @tracked display = false;
  @tracked message = '';
  @tracked messageUpdate;
  @tracked successfulFind = false;

  @action
  updateTaskInput(event) {
    this.taskInput = event.target.value;
  }

  @action
  updateTaskStatus(event) {
    this.task.status = event.target.value;
  }

  @action
  updateTaskDueDate(event) {
    this.task.dueDate = event.target.value;
  }


  @action
  async fetchTaskByTitle(event) {
    event.preventDefault();
    this.message = '';
    this.successfulFind = false; 

    try {
      console.log("Task Name : ", this.taskInput);
      this.task = await this.taskData.fetchTaskByTitle(this.taskInput);
      
      if (this.task) {
        this.display = true; 
        this.message = 'Task Found';
        this.successfulFind =  true;
      } else {
        this.display = false;
        this.message = 'No such task in the database';
        this.successfulFind = false;
      }
      console.log("Task : ", this.task);
    } catch (error) {
      console.error('Error fetching task:', error);
      this.display = false;
      this.message = 'There is some error, reload and try again'; 
      this.successfulFind = false;
    }
  }


  @action
  async updateExistingTask(event) {
    event.preventDefault();
    try {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      const selectedDate = new Date(this.task.dueDate);
      if (this.task.title.trim() === '') {
        this.messageUpdate = 'Title cannot be blank.';
        return;
      } else if (this.task.dueDate.trim() === '') {
        this.messageUpdate = 'Date cannot be blank.';
        return;
      } else if (selectedDate < currentDate) {
        this.messageUpdate = 'Due date cannot be in the past.';
        return;
      }
      await this.taskData.updateTask(this.task.id,this.task);
      this.display = false;
      this.message = 'Task Updated';
      this.messageUpdate = '';  
      this.successfulFind = true; 
    } catch (error) {
      console.error('Error updating task:', error);
      
    }
  }
  
  @action
  goBack() {
    this.display = false;
    this.message = ''; 
    this.successfulFind = false;
    this.messageUpdate = ''; 
    
  }
}

