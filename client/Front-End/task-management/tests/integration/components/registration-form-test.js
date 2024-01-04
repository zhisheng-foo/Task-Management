import { module, test } from 'qunit';
import { setupRenderingTest } from 'task-management/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | registration-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RegistrationForm />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <RegistrationForm>
        template block text
      </RegistrationForm>
    `);

    assert.dom().hasText('template block text');
  });
});
