'use strict';

function choose_even(collection) {
  let res = new Array();
  let index = 0;
  for(let element of collection) {
    if(element % 2 == 0) {
      console.log('ele' + element);
      res[index] = element;
      index++;
    }
  }

  return res;
}

module.exports = choose_even;
