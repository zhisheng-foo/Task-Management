import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('tasks'); // http://localhost:4200/tasks
  this.route('register'); // http://localhost:4200/register
});
