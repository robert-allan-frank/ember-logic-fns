import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | logic-not-equals', function(hooks) {
  setupRenderingTest(hooks);

  test('can compare two numbers', async function(assert) {
    await render(hbs`{{logic-not-equals 1 2}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare two strings', async function(assert) {
    await render(hbs`{{logic-not-equals 'a' 'b'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare equal numbers', async function(assert) {
    await render(hbs`{{logic-not-equals 1 1}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can compare equal strings', async function(assert) {
    await render(hbs`{{logic-not-equals 'a' 'a'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('ensures at least two values are present', async function(assert) {
    await render(hbs`{{logic-not-equals 1}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
