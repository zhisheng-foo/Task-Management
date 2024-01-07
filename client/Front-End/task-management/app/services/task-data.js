import Service from '@ember/service';
import { action } from '@ember/object';

export default class TaskDataService extends Service {

  @action
  checkTaskExist(taskName) {
    const accessToken = '12345';
    const url = `http://localhost:3000/api/Tasks/customExist/${encodeURIComponent(taskName)}?access_token=${encodeURIComponent(accessToken)}`;

    return fetch(url)
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

  @action
  fetchTaskByTitle(title) {
    const accessToken = '12345';
    const url = `http://localhost:3000/api/Tasks/retrieveTaskByTitle/${encodeURIComponent(title)}?access_token=${encodeURIComponent(accessToken)}`;
  
    return this.checkTaskExist(title).then(exists => {
      if (exists.exists === true) {
        console.log(exists);
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
            console.error('Fetch unsuccessful:', response.status, response.statusText);
            console.log(response);
            return null;
          }
        })
        .catch((error) => {
          console.error('Error fetching task by title:', error);
          return null;
        });
      } else {
        console.log('Task does not exist:', title);
        return null;
      }
    }).catch((error) => {
      console.error('Error in checking task existence:', error);
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
  
  @action
  updateTask(taskId, taskData) {
    const accessToken = '12345';
    const url = `http://localhost:3000/api/Tasks/updateTask/${taskId}?access_token=${encodeURIComponent(accessToken)}`;
  
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error updating task:', error);
      throw error;
    });
  }
  
}
