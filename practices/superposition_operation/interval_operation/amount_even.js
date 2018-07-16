'use strict';

function amount_even(collection) {
  let res = 0;
  collection.forEach(element => {
    if(element % 2 == 0) {
      res += element;
    }
  });
  return res;
}

module.exports = amount_even;
