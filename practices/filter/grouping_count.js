'use strict';

function grouping_count(collection) {
  let res = {}
  collection.forEach(element => {
    if(res[element] === undefined) {
      res[element] = 1;
    } else {
      res[element]++;
    }
  });

  return res;
}

module.exports = grouping_count;
