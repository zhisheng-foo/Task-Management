import Model, { attr, hasMany } from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr('number') id;
  @attr('string') name;
  @hasMany('task') tasks;
}
