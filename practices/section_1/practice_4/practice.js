function collect_same_elements(collection_a, object_b) {
  let res = new Array();
  let col_a = new Array();
  collection_a.forEach(element => {
    col_a.push(element["key"]);
  });
  col_a.forEach(element => {
    let col = object_b["value"];
    if(col.indexOf(element) != -1) {
      res.push(element);
    }
  });
  return res;
}

module.exports = collect_same_elements;
