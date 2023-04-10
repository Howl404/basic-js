const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  let l = Date.parse(date)
  if(typeof date == 'undefined') {
    return 'Unable to determine the time of year!';
  }
  if(isNaN(l)) {
    throw new Error("Invalid date!");
  }
  if(date instanceof Date) {
    console.debug(l)
    
    try {
      date.toISOString();
    } catch {
      throw new Error("Invalid date!")
    }

      month = date.getMonth()
      switch (month) {
        case 11: case 0: case 1:
          return "winter"
        case 10: case 9: case 8:
          return "autumn"
        case 7: case 6: case 5:
          return "summer"
        case 4: case 3: case 2:
          return "spring"
      }
    }

  }


module.exports = {
  getSeason
};


console.log(getSeason(new Date(2019, 11, 22, 23, 45, 11, 500)));