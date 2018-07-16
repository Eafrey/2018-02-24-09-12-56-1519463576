'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let res = new Array();
  collection_a.forEach(element => {
    for(let b_e of collection_b) {
      if(element % b_e == 0) {
        res.push(element);
        break;
      }
    }
  });

  return res;
}

module.exports = choose_divisible_integer;
