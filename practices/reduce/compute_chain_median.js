'use strict';

function compute_chain_median(collection) {
  let arr = collection.split('->');
  let numarr = new Array();
  arr.forEach(element => {
    numarr.push(parseInt(element));
  });
  let len = arr.length;
  
  for(let i=0; i<numarr.length; i++) {
    for(let j=i; j<numarr.length; j++) {
      if(numarr[i] > numarr[j]) {
        let tmp = numarr[i];
        numarr[i] = numarr[j];
        numarr[j] = tmp;
      }
    }
  }

  if(len % 2 == 0) {
    return (numarr[len/2]+numarr[len/2-1])/2;
  } else {
    return numarr[parseInt(len/2)];
  }
}

module.exports = compute_chain_median;
