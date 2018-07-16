'use strict';

function choose_no_repeat_number(collection) {
  let res = new Set();
  collection.forEach(element => {
      res.add(element);
  });
  
  return Array.from(res);
}

module.exports = choose_no_repeat_number;
