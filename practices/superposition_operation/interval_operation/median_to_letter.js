'use strict';

function median_to_letter(collection) {
  let len = collection.length;
  let mid = 0;
  if(len % 2 == 0) {
    mid = Math.round((collection[len/2] + collection[len/2 - 1]) / 2);
  } else {
    mid = Math.round(collection[parseInt(len/2)]);
  }

  return num2str(mid);

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

module.exports = median_to_letter;
