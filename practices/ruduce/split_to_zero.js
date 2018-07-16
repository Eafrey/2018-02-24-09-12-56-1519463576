'use strict';

function spilt_to_zero(number, interval) {
  let res = new Array();
  while(num - interval > 0) {
    res.push(num);
    num -= interval;
  }
  res.push(num);
  
  return res;
}

module.exports = spilt_to_zero;
