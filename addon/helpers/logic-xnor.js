import { helper } from '@ember/component/helper';

/**
 * Perform xnor of boolean values.
 *
 * @public
 * @function logicXnor
 * @param {boolean} left The left operand.
 * @param {boolean} right The left operand.
 * @returns {boolean} True iff both operands are true or false.
 */
export function logicXnor([left, right]) {
  return (left && right) || (!left && !right);
}

export default helper(logicXnor);
