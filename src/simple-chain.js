const { NotImplementedError, checkForNotThrowingErrors } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length: 0,
  array: [],

  getLength() {
    return this.length
  },
  addLink(value) { 

    this.length++;
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position <= 0 || position > this.length || typeof position !== 'number') {
      this.length = 0;
      this.array = [];
      throw new Error("You can't remove incorrect link!")
    } else {
      position--;
      this.array.splice(position,1);
    }
    return this;
  },
  reverseChain() {
    this.array = this.array.reverse();
    return this;
  },
  finishChain() {
    s = this.array.join("~~")
    this.array = []
    this.length = 0;
    return s;
  },
};

console.log(chainMaker.addLink(function () { })
.addLink('2nd')
.addLink('3rd')
.removeLink(2)
.reverseChain()
.finishChain());

module.exports = {
  chainMaker
};
