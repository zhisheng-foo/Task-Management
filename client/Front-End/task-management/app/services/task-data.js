import Service from '@ember/service';
import { action } from '@ember/object';

export default class TaskDataService extends Service {
  @action
  fetchTaskByTitle(title) {
    const accessToken = '12345';
    const url = `http://localhost:3000/api/Tasks/retrieveTaskByTitle/${encodeURIComponent(
      title,
    )}?access_token=${encodeURIComponent(accessToken)}`;

    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // Handle non-OK responses by returning null
          console.error(
            'Fetch unsuccessful:',
            response.status,
            response.statusText,
          );
          return null;
        }
      })
      .catch((error) => {
        // Handle network error or other fetch errors by returning null
        console.error('Error fetching task by title:', error);
        return null;
      });
  }

  @action
  viewAllTasks(authorId) {
    const accessToken = '12345';
    console.log(authorId); 
    const url = `http://localhost:3000/api/Authors/${authorId}/customViewAllTasks?authorId=${authorId}&access_token=${accessToken}`;

    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.error('Error fetching tasks 1:', response.statusText);
        return null;
      }
    })
    .catch((error) => {
      console.error('Error fetching tasks 2 :', error);
      return null;
    });
  }


}
