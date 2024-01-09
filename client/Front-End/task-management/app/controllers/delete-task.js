import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DeleteTaskController extends Controller {
    @service taskData;
    @service router;

    @tracked message = '';
    @tracked successful = false;
    @tracked taskName = '';

    @action
    updateTaskName(event) {
        
        this.taskName = event.target.value;
        this.message = ''; 
        this.successful = false;
      
    }

    @action
    async deleteTask(event) {
        event.preventDefault();
        this.message = ''; 
        this.successful = false; 
        try {
            const exists = await this.taskData.checkTaskExist(this.taskName);
            if(exists === null) {
                this.message = "Input cannot be blank.";
                this.successful = false;
                return;
            } else if (!exists.exists) {
                this.message = 'Task does not exist in the database';
                this.successful = false;
                return;
            }

            await this.taskData.deleteTaskByName(this.taskName);
            this.message = 'Task deleted successfully';
            this.successful = true;
        } catch (error) {
            console.error('Error in deleting task:', error);
            this.message = 'Error occurred during task deletion';
            this.successful = false;
        }
    }

    @action
    goBack() {
        this.message = '';
        this.successfulFind = false;
        this.taskName = '';
        this.router.transitionTo('tasks');
    }

}
