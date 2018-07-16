'use strict';
var even_group_calculate_average = function(collection){
    let oushu = new Array();

    for(let ele in collection) {
        if(ele % 2 != 0) {
            if(collection[ele] % 2 == 0) {
                oushu.push(collection[ele]);
            }
        }
    }

    let wei1 = new Array();
    let wei2 = new Array();
    let wei3 = new Array();

    oushu.forEach(element => {
        if(parseInt(element / 100) > 0) {
            wei3.push(element);
        } else if(parseInt(element / 10) > 0) {
            wei2.push(element);
        } else {
            wei1.push(element);
        }
    });


    if(wei1.length == 0 && wei2.length == 0 && wei3.length == 0) {
        return [0];
    } else if(wei1.length == 0 && wei2.length == 0 && wei3.length != 0) {
        return [getAve(wei3)];
    } else {
        let res = new Array();
        res.push(getAve(wei1));
        res.push(getAve(wei2));
        res.push(getAve(wei3));
        return res;
    }
};

function getAve(col) {
    let res = 0;
    col.forEach(element => {
        res += element;
    });
    return parseInt(res/col.length);
}
module.exports = even_group_calculate_average;
