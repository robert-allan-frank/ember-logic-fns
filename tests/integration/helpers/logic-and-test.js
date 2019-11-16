import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | logic-and', function(hooks) {
  setupRenderingTest(hooks);

  test('can verify true', async function(assert) {
    const value1 = true;
    const value2 = true;
    const value3 = true;
    this.set('value1', value1);
    this.set('value2', value2);
    this.set('value3', value3);
    await render(hbs`{{logic-and value1 value2 value3}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can verify false', async function(assert) {
    const value1 = true;
    const value2 = false;
    const value3 = true;
    this.set('value1', value1);
    this.set('value2', value2);
    this.set('value3', value3);
    await render(hbs`{{logic-and value1 value2 value3}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
