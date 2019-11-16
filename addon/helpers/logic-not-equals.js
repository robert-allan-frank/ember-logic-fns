import { helper } from '@ember/component/helper';

/**
 * Determine if two or more are not equal.
 *
 * @public
 * @function logicNotEquals
 * @param {...Object} operands The values to compare.
 * @return {boolean} True if at least one value is not equal.
 */
export function logicNotEquals([...values]) {
  // range check at least 2 operands
  if (values.length < 2) {
    return false;
  }

  // get first value
  const first = values.shift();

  // compare first with each subsequent value for a non match
  return values.some(value => value !== first);
}

export default helper(logicNotEquals);
