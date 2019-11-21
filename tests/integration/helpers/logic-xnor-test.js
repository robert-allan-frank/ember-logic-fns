import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | logic-xnor', function(hooks) {
  setupRenderingTest(hooks);

  test('can verify xnor true true', async function(assert) {
    const left = true;
    const right = true;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-xnor left right}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can verify xnor true false', async function(assert) {
    const left = true;
    const right = false;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-xnor left right}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can verify xnor false true', async function(assert) {
    const left = false;
    const right = true;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-xnor left right}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can verify xnor false false', async function(assert) {
    const left = false;
    const right = false;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-xnor left right}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });
});
