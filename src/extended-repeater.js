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
  let s = "";
  if(options.repeatTimes === 1) {
    return str
  }
  if (options.separator && options.addition) {
    
  }
  if (options.separator) {
    for (let i = 0; i < options.repeatTimes; i++) {
      if(i === options.repeatTimes - 1){
        s+= str
      } else {
        s+= `${str}${options.separator}`
      }

    }
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      if(i === options.repeatTimes - 1) {
        s+= str
      } else {
        s+= `${str}+`
      }

    }
  }
  return s;
}

module.exports = {
  repeater
};
