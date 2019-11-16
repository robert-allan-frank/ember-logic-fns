import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | logic-not', function(hooks) {
  setupRenderingTest(hooks);

  test('can verify not of true', async function(assert) {
    const value = true;
    this.set('value', value);
    await render(hbs`{{logic-not value}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can verify not of false', async function(assert) {
    const value = false;
    this.set('value', value);
    await render(hbs`{{logic-not value}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });
});
