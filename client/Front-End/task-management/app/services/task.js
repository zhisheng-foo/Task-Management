import Service from '@ember/service';
import { action } from '@ember/object';

export default class TaskService extends Service {
  @action
  createTask(taskData) {
    return fetch('http://localhost:3000/api/Tasks/createTask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    }).then((response) => response.json());
  }
}
