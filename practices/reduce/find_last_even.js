'use strict';

function find_last_even(collection) {
  let res = 0;
  collection.forEach(element => {
    if(element % 2 == 0) {
      res = element;
    }
  });
  return res;
}

module.exports = find_last_even;
