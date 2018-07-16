function collect_same_elements(collection_a, object_b) {
  let res = new Array();
  collection_a.forEach(element => {
    let col = object_b["value"];
    if(col.indexOf(element) != -1) {
      res.push(element);
    }
  });
  return res;
}

module.exports = collect_same_elements;
