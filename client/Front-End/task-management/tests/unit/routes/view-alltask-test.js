import { module, test } from 'qunit';
import { setupTest } from 'task-management/tests/helpers';

module('Unit | Route | view-alltask', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:view-alltask');
    assert.ok(route);
  });
});
