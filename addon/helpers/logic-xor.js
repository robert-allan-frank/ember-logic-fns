import { helper } from '@ember/component/helper';

/**
 * Perform xor of boolean values.
 *
 * @public
 * @function logicXor
 * @param {boolean} left The left operand.
 * @param {boolean} right The left operand.
 * @returns {boolean} True iff either operand is true but not both.
 */
export function logicXor([left, right]) {
  return (left && !right) || (!left && right);
}

export default helper(logicXor);
