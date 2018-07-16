'use strict';
function map_to_even(collection){
  let res = new Array();
  collection.forEach(element => {
    res.push(element*2);
  });
  
  return res;
  //return [2,4,6,8,10];
}
module.exports = map_to_even;
