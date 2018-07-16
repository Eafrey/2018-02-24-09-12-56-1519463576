'use strict';
var single_element = function(collection){
    let oushu = new Array();

    for(let ele in collection) {
        if(ele % 2 != 0) {
             oushu.push(collection[ele]);
        }
    }

    let res = new Array();
    let obj = new Map();

    oushu.forEach(element => {
        if(obj.get(element) == null) {
            obj.set(element, 1);
        } else {
            obj.set(element, obj.get(element)+1);
        }
    });

    let arr = Array.from(obj.keys());
    console.log(arr);
    arr.forEach(element => {
        if(obj.get(element) == 1) {
            res.push(element);
        }
    });

    for(let i=0; i<res.length; i++) {
        for(let j=i; j<res.length; j++) {
            if(res[i] > res[j]) {
                let tmp = res[i];
                res[i] = res[j];
                res[j] = tmp;
            }
        }
    }

    return res;
};
module.exports = single_element;
