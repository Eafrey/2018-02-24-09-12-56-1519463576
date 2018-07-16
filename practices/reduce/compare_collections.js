'use strict';

function compare_collections(collection_a, collection_b) {
  let res = true;
  if(collection_a.length != collection_b.length) {
    res = false;
  } else {
    for(let i=0; i<collection_a.length; i++) {
      if(collection_a[i] != collection_b[i]) {
        res = false;
      }
    }
  }

  return res;
}

module.exports = compare_collections;


