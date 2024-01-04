import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class AuthorRegistrationService extends Service {
  @service store;

  createAuthor(authorData) {
    return fetch('http://localhost:3000/api/Authors/customCreate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 12345',
      },
      body: JSON.stringify(authorData),
    }).then((response) => response.json());
  }

 

  checkAuthorExists(authorName) {
    const accessToken = '12345'; 
    const url = `http://localhost:3000/api/Authors/customExist?name=${encodeURIComponent(authorName)}&access_token=${encodeURIComponent(accessToken)}`;
  
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json());
  }
  
  

}
