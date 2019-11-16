import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | logic-xor', function(hooks) {
  setupRenderingTest(hooks);

  test('can verify xor left', async function(assert) {
    const left = true;
    const right = false;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-xor left right}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can verify xor right', async function(assert) {
    const left = false;
    const right = true;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-xor left right}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can verify xor left false', async function(assert) {
    const left = false;
    const right = false;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-xor left right}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can verify xor left true', async function(assert) {
    const left = true;
    const right = true;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-xor left right}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
