import { module, test } from 'qunit';
import { setupTest } from 'task-management/tests/helpers';

module('Unit | Controller | tasks', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:tasks');
    assert.ok(controller);
  });
});
