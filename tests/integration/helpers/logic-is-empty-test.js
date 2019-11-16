import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | logic-is-empty', function(hooks) {
  setupRenderingTest(hooks);

  test('can determine is empty', async function(assert) {
    await render(hbs`{{logic-is-empty value}}`);
    assert.equal(this.element.textContent.trim(), 'true');

    this.set('value', null);
    await render(hbs`{{logic-is-empty value}}`);
    assert.equal(this.element.textContent.trim(), 'true');

    this.set('value', '');
    await render(hbs`{{logic-is-empty value}}`);
    assert.equal(this.element.textContent.trim(), 'true');

    this.set('value', []);
    await render(hbs`{{logic-is-empty value}}`);
    assert.equal(this.element.textContent.trim(), 'true');

    this.set('value', {});
    await render(hbs`{{logic-is-empty value}}`);
    assert.equal(this.element.textContent.trim(), 'false');

    this.set('value', 'ember');
    await render(hbs`{{logic-is-empty value}}`);
    assert.equal(this.element.textContent.trim(), 'false');

    this.set('value', ['ember']);
    await render(hbs`{{logic-is-empty value}}`);
    assert.equal(this.element.textContent.trim(), 'false');

    this.set('value', ' ');
    await render(hbs`{{logic-is-empty value}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
