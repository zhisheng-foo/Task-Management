import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ViewAllTaskRoute extends Route {
  @service taskData;
  @service globalState;


  model() {
    if (this.globalState.authorId !='') {
      const authorId = this.globalState.authorId;
      return this.taskData.viewAllTasks(authorId)
        .catch((error) => {
          throw error;
        });
    }
    return [];
  }
  

  setupController(controller, model) {
    super.setupController(controller, model); 
    controller.set('tasks', model);
  }
  
}

