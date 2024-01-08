// app/routes/update-task.js

import Route from '@ember/routing/route';

export default class UpdateTaskRoute extends Route {
    resetController(controller, isExiting) {
        if (isExiting) {
            // Reset properties when the route is exiting
            controller.set('message', '');
            controller.set('messageUpdate', '');
            controller.set('display', false);
            controller.set('successfulFind', false);
            controller.set('taskInput', '');
            controller.set('task', null);
        }
    }
}
