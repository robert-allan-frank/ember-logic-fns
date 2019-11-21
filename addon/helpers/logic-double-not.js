import { helper } from '@ember/component/helper';

/**
 * Perform force conversion to a boolean.
 *
 * @public
 * @function logicDoubleNot
 * @param {boolean} value The value to convert.
 * @return {boolean} Forced boolean value.
 */
export function logicDoubleNot([value]) {
  return !!value;
}

export default helper(logicDoubleNot);
