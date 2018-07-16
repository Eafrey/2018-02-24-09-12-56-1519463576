'use strict';
function rank_by_two_large_one_small(collection){
  for(let i=0; i<collection.length; i++) {
    for(let j=i; j<collection.length; j++) {
        if(collection[i]  > collection[j]) {
            let tmp = collection[i];
            collection[i] = collection[j];
            collection[j] = tmp;
        }
    }
  }
  let res = new Array();
  let i=0;
  for(; i+3<collection.length; i+=3) {
    if(i+1 < collection.length) {
      res.push(collection[i+1]);
    } 
    if(i+2 < collection.length) {
      res.push(collection[i+2]);
    }

    res.push(collection[i]);
  }
  for(; i<collection.length; i++) {
    res.push(collection[i]);
  }
  return res;
}
module.exports = rank_by_two_large_one_small;
