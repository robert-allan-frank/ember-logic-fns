import { helper } from '@ember/component/helper';

/**
 * Perform and of boolean values.
 *
 * @public
 * @function logicAnd
 * @param {...boolean} values The boolean values.
 * @returns {boolean} If all values are true.
 */
export function logicAnd([...values]) {
  return values.every(value => {
    return value && true;
  });
}

export default helper(logicAnd);
