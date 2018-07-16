'use strict';

function find_first_even(collection) {
  let res = 0;
  for(let element of collection) {
    if(element % 2 == 0) {
      res = element;
      break;
    }
  }
  return res;
}

module.exports = find_first_even;

