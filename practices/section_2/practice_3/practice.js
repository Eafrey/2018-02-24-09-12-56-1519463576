function count_same_elements(collection) {
  let res = new Map();
  collection.forEach(element => {
    let key = "";
    let val = 0;
    if(element.indexOf('-') != -1) {
        let tmp = element.split('-');
        key = tmp[0];
        val = parseInt(tmp[1]);
      } else if(element.indexOf(':') != -1) {
        let tmp = element.split(':');
        key = tmp[0];
        val = parseInt(tmp[1]);
      } else if(element.indexOf('[') != -1) {
        let tmp = element.split('[');
        key = tmp[0];
        val = parseInt(tmp[1]);
      } else {
        key = element;
        val = 1;
      }
    if(res.get(key) == null) {
      res.set(key, val);
    } else {
      res.set(key, res.get(key) + val)
    }
  });

  let ret = new Array();
  
  let keyss = Array.from(res.keys());

  keyss.forEach(element => {
    let obj = {};
    obj["name"] = element;
    obj["summary"] = res.get(element); 
    ret.push(obj);
  });
  return ret;
}

module.exports = count_same_elements;
