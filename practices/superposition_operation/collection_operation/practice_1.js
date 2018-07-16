'use strict';

function hybrid_operation(collection) {
  let sum = 0;
  collection.forEach(element => {
    sum += element * 3 + 2;
  });

  return sum;
}

module.exports = hybrid_operation;

