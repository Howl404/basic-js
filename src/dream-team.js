const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(Array.isArray(members)) {
    return members.reduce( function (accumulator,current) {
      console.log(typeof current);
      if(typeof current === 'string') {
        s = current.trim()
        accumulator.push(s[0].toUpperCase())
      }
  
      return accumulator;
     },[]).sort().join("");
  } else return false;

}

module.exports = {
  createDreamTeam
};
