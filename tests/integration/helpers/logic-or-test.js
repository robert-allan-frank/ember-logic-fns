import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | logic-or', function(hooks) {
  setupRenderingTest(hooks);

  test('can verify or true true', async function(assert) {
    const left = true;
    const right = true;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-or left right}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can verify or true false', async function(assert) {
    const left = true;
    const right = false;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-or left right}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can verify or false true', async function(assert) {
    const left = false;
    const right = true;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-or left right}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can verify or false false', async function(assert) {
    const left = false;
    const right = false;
    this.set('left', left);
    this.set('right', right);
    await render(hbs`{{logic-or left right}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can verify true more than 2 values', async function(assert) {
    const left = false;
    const middle = false;
    const right = true;
    this.set('left', left);
    this.set('middle', middle);
    this.set('right', right);
    await render(hbs`{{logic-or left middle right}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can verify false more than 2 values', async function(assert) {
    const left = false;
    const middle = false;
    const right = false;
    this.set('left', left);
    this.set('middle', middle);
    this.set('right', right);
    await render(hbs`{{logic-or left middle right}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
