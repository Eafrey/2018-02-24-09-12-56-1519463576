'use strict';

function double_to_one(collection) {
  let res = new Array();

  collection.forEach(element => {
    if(element instanceof Array) {
      element.forEach(ele => {
        res.push(ele);
      });
    } else {
      res.push(element);
    }
  });

  return res;
}

module.exports = double_to_one;
