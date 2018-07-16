'use strict';
var even_asc_odd_desc = function(collection){
    let oushu = new Array();
    let jishu = new Array();

    collection.forEach(element => {
        if(element % 2 == 0) {
            oushu.push(element);
        } else {
            jishu.push(element);
        }
    });


    for(let i=0; i<oushu.length; i++) {
        for(let j=i; j<oushu.length; j++) {
            if(oushu[i] > oushu[j]) {
                let tmp = oushu[i];
                oushu[i] = oushu[j];
                oushu[j] = tmp;
            }
        }
    }

    for(let i=0; i<jishu.length; i++) {
        for(let j=i; j<jishu.length; j++) {
            if(jishu[i] < jishu[j]) {
                let tmp = jishu[i];
                jishu[i] = jishu[j];
                jishu[j] = tmp;
            }
        }
    }

    let res = new Array();
    oushu.forEach(element => {
        res.push(element);
    });
    jishu.forEach(element => {
        res.push(element);
    });
    return res;
}; 
module.exports = even_asc_odd_desc;
