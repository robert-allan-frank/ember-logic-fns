import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | logic-nand', function(hooks) {
  setupRenderingTest(hooks);

  test('can verify nand true true', async function(assert) {
    const left = true;
    const right = true;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-nand left right}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can verify nand true false', async function(assert) {
    const left = true;
    const right = false;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-nand left right}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can verify nand false true', async function(assert) {
    const left = false;
    const right = true;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-nand left right}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can verify nand false false', async function(assert) {
    const left = false;
    const right = false;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-nand left right}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });
});
