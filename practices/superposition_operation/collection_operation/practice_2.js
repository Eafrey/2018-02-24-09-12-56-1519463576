'use strict';

function hybrid_operation_to_uneven(collection) {
  let res = new Array();
  collection.forEach(element => {
    if(element % 2 != 0) {
      res.push(element * 3 + 2);
    }
    
  });

  return res;
}

module.exports = hybrid_operation_to_uneven;

