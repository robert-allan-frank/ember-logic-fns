import { helper } from '@ember/component/helper';

/**
 * Perform not of a value.
 *
 * @public
 * @function logicNot
 * @param {boolean} value The value to invert.
 * @return {boolean} Inverse of boolean value.
 */
export function logicNot([value]) {
  // return the inverse of the value
  return !value;
}

export default helper(logicNot);
