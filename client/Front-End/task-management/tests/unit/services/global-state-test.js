import { module, test } from 'qunit';
import { setupTest } from 'task-management/tests/helpers';

module('Unit | Service | global-state', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:global-state');
    assert.ok(service);
  });
});
