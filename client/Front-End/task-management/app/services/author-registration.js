import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class AuthorRegistrationService extends Service {

  createAuthor(authorData) {
    return fetch('http://localhost:3000/api/Authors/customCreate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 12345',
      },
      body: JSON.stringify(authorData),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Network error or JSON parsing error:", error);
      throw error; 
    });
  }

  checkAuthorExists(authorName) {
    const accessToken = '12345';
    const url = `http://localhost:3000/api/Authors/customExist?name=${encodeURIComponent(authorName)}&access_token=${encodeURIComponent(accessToken)}`;

    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Network error or JSON parsing error:", error);
      throw error; 
    });
  }
}

