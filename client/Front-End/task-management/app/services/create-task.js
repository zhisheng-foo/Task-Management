import Service from '@ember/service';
import { action } from '@ember/object';

export default class CreateTaskService extends Service {
  @action
  createTask(taskData) {
    return fetch('http://localhost:3000/api/Tasks/createTask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Network error or JSON parsing error:', error);
        throw error;
      });
  }
}
