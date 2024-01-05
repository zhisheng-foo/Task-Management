import { module, test } from 'qunit';
import { setupTest } from 'task-management/tests/helpers';

module('Unit | Controller | view-task', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:view-task');
    assert.ok(controller);
  });
});
