'use strict';
var is_exist_element = function(collection,element){
    let oushu = new Array();

    for(let ele in collection) {
        if(ele % 2 == 0) {
             oushu.push(collection[ele]);
        }
    }

    if(oushu.indexOf(element) != -1) {
        return true;
    } else {
        return false;
    }


};
module.exports = is_exist_element;
