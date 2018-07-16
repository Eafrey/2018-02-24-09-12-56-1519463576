'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let res = new Array();
  let index = 0;
  collection.forEach(element => {
    if(element % 2 === 0) {
      res[index] = element;
      index++;
    }
  });
  return res;
}

module.exports = collect_all_even;
