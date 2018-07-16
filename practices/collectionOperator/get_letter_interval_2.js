'use strict';

function get_letter_interval_2(number_a, number_b) {
  let res = new Array();
  if(number_a <= number_b) {
    for(let i=number_a; i<=number_b; i++) {
      res.push(num2str(i));
    }
  } else {
    for(let i=number_a; i>=number_b; i--) {
      res.push(num2str(i));
    }
  }
  return res;
}

function num2str(num) {
  let stringName = "";
  if(num > 0) {
    if(num >= 1 && num <= 26) {
      stringName = String.fromCharCode(96 + parseInt(num));
    } else {
      while(num > 26) {
        var count = parseInt(num/26);
        var remainder = num%26;
        if(remainder == 0) {
          remainder = 26;
          count--;
          stringName = String.fromCharCode(96 + parseInt(remainder)) + stringName;
        } else {
          stringName = String.fromCharCode(96 + parseInt(remainder)) + stringName;
        }
        num = count;
      }
      stringName = String.fromCharCode(96 + parseInt(num)) + stringName;
    }
  }

  return stringName;
}

module.exports = get_letter_interval_2;

