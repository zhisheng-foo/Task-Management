import { module, test } from 'qunit';
import { setupTest } from 'task-management/tests/helpers';

module('Unit | Route | view-task', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:view-task');
    assert.ok(route);
  });
});