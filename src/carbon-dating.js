const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 
 *
 */
function dateSample(sampleActivity) {
  if(sampleActivity > 0 && sampleActivity < 15 && typeof sampleActivity === 'string') {
    return Math.trunc(Math.log((sampleActivity/MODERN_ACTIVITY)) / (0.693/ -5730) + 1);
  } else return false

}

module.exports = {
  dateSample
};
