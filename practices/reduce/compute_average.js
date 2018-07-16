'use strict';

function compute_average(collection) {
  let sum = 0.0;

  collection.forEach(element => {
    sum += element;
  });

  return sum / collection.length;
}

module.exports = compute_average;

