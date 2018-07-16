'use strict';

function get_union(collection_a, collection_b) {
  let res = new Array();
  collection_a.forEach(element => {
    if(res.indexOf(element) == -1) {
      res.push(element);
    }
  });

  collection_b.forEach(element => {
    if(res.indexOf(element) == -1) {
      res.push(element);
    }
  });

  return res;
}

module.exports = get_union;

