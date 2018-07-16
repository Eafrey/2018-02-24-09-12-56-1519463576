'use strict';

function double_to_one(collection) {
  let arr = new Array();
  let res = new Set();

  collection.forEach(element => {
    if(element instanceof Array) {
      element.forEach(ele => {
        arr.push(ele);
      });
    } else {
      arr.push(element);
    }
  });

  arr.forEach(element => {
    res.add(element);
  });

  return Array.from(res);
}

module.exports = double_to_one;
