'use strict';

function choose_multiples_of_three(collection) {
  let res = {};
  let index = 0;
  collection.forEach(element => {
    if(element / 3 === 0) {
      res[index] = element;
      index++;
    }
  });

  return res;
}

module.exports = choose_multiples_of_three;
