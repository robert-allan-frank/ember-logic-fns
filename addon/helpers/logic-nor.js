import { helper } from '@ember/component/helper';

/**
 * Perform nor of boolean values.
 *
 * @public
 * @function logicNor
 * @param {boolean} left The left operand.
 * @param {boolean} right The left operand.
 * @returns {boolean} True iff both operands are false.
 */
export function logicNor([left, right]) {
  return !left && !right;
}

export default helper(logicNor);
