import Route from '@ember/routing/route';

export default class UpdateTaskRoute extends Route {
    resetController(controller, isExiting) {
        if (isExiting) {
            controller.set('message', '');
            controller.set('messageUpdate', '');
            controller.set('display', false);
            controller.set('successfulFind', false);
            controller.set('taskInput', '');
            controller.set('task', null);
        }
    }
}
