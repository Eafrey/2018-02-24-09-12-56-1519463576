'use strict';

function choose_multiples_of_three(collection) {
  let res = new Array();
  collection.forEach(element => {
    if(element % 3 === 0) {
      res.push(element);
    }
  });

  return res;
}

module.exports = choose_multiples_of_three;
