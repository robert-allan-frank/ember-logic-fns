import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | logic-double-not', function(hooks) {
  setupRenderingTest(hooks);

  test('can verify double not of values', async function(assert) {
    let value 
    
    value = {};
    this.set('value', value);
    await render(hbs`{{logic-double-not value}}`);
    assert.equal(this.element.textContent.trim(), 'true');

    value = '';
    this.set('value', value);
    await render(hbs`{{logic-double-not value}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
