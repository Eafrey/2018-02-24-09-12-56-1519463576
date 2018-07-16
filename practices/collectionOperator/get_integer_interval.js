'use strict';

function get_integer_interval(number_a, number_b) {
  let res = new Array();
  if(number_a == number_b) {
    res.push(number_a);
  } else if(number_a > number_b) {
    for(let i=number_a; i>=number_b; i--) {
      res.push(i);
    }
  } else {
    for(let i=number_a; i<=number_b; i++) {
      res.push(i);
    }
  }

  return res;
}

module.exports = get_integer_interval;

