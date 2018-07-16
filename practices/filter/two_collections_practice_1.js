'use strict';

function choose_common_elements(collection_a, collection_b) {
  let res = new Array();
  collection_a.forEach(element => {
    if(collection_b.indexOf(element) != -1) {
      res.push(element);
    }
  });
  return res;
}

module.exports = choose_common_elements;
