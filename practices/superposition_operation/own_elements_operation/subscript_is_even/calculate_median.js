'use strict';
var calculate_median = function(collection){
    let oushu = new Array();
    for(let ele in collection) {
        if(ele % 2 != 0) {
            oushu.push(collection[ele]);
        }
    }
    
    console.log(oushu);

    let len = oushu.length;
    if(len % 2 == 0) {
        return parseInt((oushu[len/2] + oushu[len/2-1])/2);
    } else {
        return oushu[parseInt(len/2)];
    }
};
module.exports = calculate_median;
