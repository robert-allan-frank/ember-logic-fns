import { helper } from '@ember/component/helper';

/**
 * Determine if two or more are exact equals.
 *
 * @public
 * @function logicEq
 * @param {...Object} operands The values to compare.
 * @return {boolean} True if all operands are equal.
 */
export function logicEq([...values]) {
  // range check at least 2 values
  if (values.length < 2) {
    return false;
  }

  // get first value
  const first = values.shift();

  // compare first with each subsequent value for a match
  return values.every(value => value === first);
}

export default helper(logicEq);
