'use strict';

function average_to_letter(collection) {
  let sum = 0;
  collection.forEach(element => {
    sum += element;
  });
  return num2str(Math.round(sum/collection.length));
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

module.exports = average_to_letter;

