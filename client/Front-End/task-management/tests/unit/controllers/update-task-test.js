import { module, test } from 'qunit';
import { setupTest } from 'task-management/tests/helpers';

module('Unit | Controller | update-task', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:update-task');
    assert.ok(controller);
  });
});
