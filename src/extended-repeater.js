const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const separator = options.separator ? options.separator : '+';
  const addition = options.addition === undefined ? '' : options.addition;
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator ?  options.additionSeparator : '|';
  
  let newStr = '';
  for (let i = 0; i < repeatTimes; i++) {
    newStr += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      newStr += addition;
      if (j !== additionRepeatTimes - 1) {
        newStr += additionSeparator;
      }
    }
    if (i !== repeatTimes - 1) {
      newStr += separator;
    }
  }
  
  return newStr;
}

module.exports = {
  repeater
};
