'use strict';

function compute_median(collection) {
  let len = collection.length;
  
  for(let i=0; i<collection.length; i++) {
    for(let j=i; j<collection.length; j++) {
      if(collection[i] > collection[j]) {
        let tmp = collection[i];
        collection[i] = collection[j];
        collection[j] = tmp;
      }
    }
  }

  if(len % 2 == 0) {
    return (collection[len/2]+collection[len/2-1])/2;
  } else {
    return collection[parseInt(len/2)];
  }
}

module.exports = compute_median;


