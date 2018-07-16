'use strict';
var map_to_four_multiples_add_one = function(collection){
  let res = new Array();
  collection.forEach(element => {
    res.push(element*4+1);
  });
  
  return res;
  //return [5,9,13,17,21];
};

module.exports = map_to_four_multiples_add_one;
