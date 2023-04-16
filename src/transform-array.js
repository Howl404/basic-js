const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(Array.isArray(arr) === false) {
    throw new Error("\'arr\' parameter must be an instance of the Array!")
    
  }
  let array = arr.map((x) => x)
  for(let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "--discard-prev":
        if(array[i - 1] !== undefined){
          array.splice(i - 1, 2)
        } else array.splice(i, 1)
        i = 0;
      break;
      case "--discard-next":
        if(array[i + 1] !== undefined){
          array.splice(i, 2)
        } else array.splice(i, 1)
        i = 0;
      break;
      case "--double-next":
        if(arr[i + 1] !== array[i + 1]) {
          array.splice(i, 1)
          break;
        }
        if(array[i + 1] !== undefined) {
          array[i] = array[i + 1]
        } else array.splice(i, 1)
        i = 0;
      break;
      case "--double-prev":
        console.log(1);
        console.log(arr[i - 1]);
        console.log(array[i]);
        if(arr[i - 1] !== array[i]) {
          array.splice(i, 1)
          break;
        }
        if(array[i - 1] !== undefined) {
          array[i] = array[i - 1]
        } else array.splice(i, 1)
        i = 0;
      break;
    }
  }
  return array;
}
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));
module.exports = {
  transform
};
