'use strict';

function hybrid_operation_to_uneven(collection) {
  let res = 0;
  collection.forEach(element => {
    if(element % 2 != 0) {
      res += element * 3 + 5;
    }
    
  });

  return res;
}

module.exports = hybrid_operation_to_uneven;

