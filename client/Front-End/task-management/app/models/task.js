import Model, { attr, belongsTo } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('number') id;
  @attr('string') title;
  @attr('string') description;
  @attr('string') status;
  @attr('date') dueDate;
  @attr('number') authorId;

  @belongsTo('author') author;
}
