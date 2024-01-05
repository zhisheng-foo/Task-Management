import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GlobalStateService extends Service {
  @tracked authorName = '';
  @tracked authorId = ''; // Add this line
}
