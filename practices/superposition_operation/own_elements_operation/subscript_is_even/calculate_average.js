'use strict';
var calculate_average = function(collection){
    let res = 0;
    let count = 0;
    for(let i=0; i<collection.length; i++) {
        if(i % 2 != 0) {
            res += collection[i];
            count++;
        }
    }

    return parseInt(res/count);
};
module.exports = calculate_average;
