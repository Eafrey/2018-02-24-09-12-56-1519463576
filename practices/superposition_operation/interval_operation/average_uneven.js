'use strict';

function average_uneven(collection) {
  let res = 0;
  let count = 0;
  collection.forEach(element => {
    if(element % 2 != 0) {
      res += element;
      count++;
    }
  });
  return parseInt(res/count);
}

module.exports = average_uneven;
