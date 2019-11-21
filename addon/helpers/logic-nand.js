import { helper } from '@ember/component/helper';

/**
 * Perform nand of boolean values.
 *
 * @public
 * @function logicNand
 * @param {boolean} left The left operand.
 * @param {boolean} right The left operand.
 * @returns {boolean} True iff at least one operand is false.
 */
export function logicNand([left, right]) {
  return !left || !right;
}

export default helper(logicNand);
