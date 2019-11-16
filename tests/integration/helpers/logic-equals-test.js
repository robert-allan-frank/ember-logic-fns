import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | logic-equals', function(hooks) {
  setupRenderingTest(hooks);

  test('can compare two numbers', async function(assert) {
    await render(hbs`{{logic-equals 1 1}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare two strings', async function(assert) {
    await render(hbs`{{logic-equals 'a' 'a'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare not equal numbers', async function(assert) {
    await render(hbs`{{logic-equals 1 2}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can compare not equal strings', async function(assert) {
    await render(hbs`{{logic-equals 'a' 'b'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can compare n numbers', async function(assert) {
    await render(hbs`{{logic-equals 1 1 1 1 1}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare n strings', async function(assert) {
    await render(hbs`{{logic-equals 'a' 'a' 'a' 'a' 'a'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('ensures at least two values are present', async function(assert) {
    await render(hbs`{{logic-equals 1}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
