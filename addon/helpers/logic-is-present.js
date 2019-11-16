import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';

/**
 * Determine if is present.
 *
 * @public
 * @function logicIsPresent
 * @param {Object} value The value.
 * @returns {boolean} True if present.
 */
export function logicIsPresent([value]) {
  return isPresent(value);
}

export default helper(logicIsPresent);
