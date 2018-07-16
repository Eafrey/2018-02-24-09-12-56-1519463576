'use strict';
var map_to_three_multiples = function(collections){
  let res = new Array();
  collections.forEach(element => {
    res.push(element*3);
  });
  
  return res;
  //return [3,9,15,12,27];
};

module.exports = map_to_three_multiples;
