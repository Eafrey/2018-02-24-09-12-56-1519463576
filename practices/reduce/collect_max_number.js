'use strict';

function collect_max_number(collection) {
  let maxV = collection[0];
  collection.forEach(element => {
    if(element > maxV) {
      maxV = element;
    }
  });
  return maxV;
}

module.exports = collect_max_number;
