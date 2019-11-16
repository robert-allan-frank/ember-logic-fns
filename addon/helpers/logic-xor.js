import { helper } from '@ember/component/helper';

/**
 * Perform xor of boolean values.
 *
 * @public
 * @function logicXor
 * @param {boolean} left The left operand.
 * @param {boolean} right The left operand.
 * @returns {boolean} True if left xor right.
 */
export function logicXor([left, right]) {
  return (left && !right) || (!left && right);
}

export default helper(logicXor);
