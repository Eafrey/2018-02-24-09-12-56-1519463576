'use strict';

function even_to_letter(collection) {
  let res = new Array();
  collection.forEach(element => {
    if(element % 2 == 0) {
      res.push(num2str(element));
    }
  });
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

module.exports = even_to_letter;
