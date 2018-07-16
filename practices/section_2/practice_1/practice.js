function count_same_elements(collection) {
  let res = new Map();
  collection.forEach(element => {
    if(res.get(element) == null) {
      res.set(element, 1);
    } else {
      res.set(element, res.get(element) + 1)
    }
  });

  let ret = new Array();
  
  let keyss = Array.from(res.keys());

  keyss.forEach(element => {
    let obj = {};
    obj["key"] = element;
    obj["count"] = res.get(element); 
    ret.push(obj);
  });
  return ret;
}

module.exports = count_same_elements;
