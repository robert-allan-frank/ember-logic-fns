import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';

/**
 * Determine if is empty.
 *
 * @public
 * @function logicIsEmpty
 * @param {Object} value The value.
 * @returns {boolean} True if empty.
 */
export function logicIsEmpty([value]) {
  return isEmpty(value);
}

export default helper(logicIsEmpty);
