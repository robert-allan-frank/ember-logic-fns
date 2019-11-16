import { helper } from '@ember/component/helper';

/**
 * Perform or of boolean values.
 *
 * @public
 * @function logicOr
 * @param {...boolean} values The boolean values.
 * @returns {boolean} If at least one value is true.
 */
export function logicOr([...values]) {
  return values.some(value => {
    return value && true;
  });
}

export default helper(logicOr);
