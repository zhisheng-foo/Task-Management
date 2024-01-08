import Route from '@ember/routing/route';

export default class DeleteTaskRoute extends Route {
    resetController(controller, isExiting) {
        if (isExiting) {
            controller.set('message', '');
            controller.set('successful', false);
            controller.set('taskName', '');
        }
    }
}
