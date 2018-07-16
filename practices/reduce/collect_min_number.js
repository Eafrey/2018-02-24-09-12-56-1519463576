'use strict';

function collect_min_number(collection) {
  let minV = collection[0];
  collection.forEach(element => {
    if(element < minV) {
      minV = element;
    }
  });
  return minV;
}

module.exports = collect_min_number;

