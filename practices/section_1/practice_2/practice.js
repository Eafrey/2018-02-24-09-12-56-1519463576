function collect_same_elements(collection_a, collection_b) {
  let res = new Array();
  collection_a.forEach(element => {
    let col = collection_b[0];
    if(col.indexOf(element) != -1) {
      res.push(element);
    }
  });
  return res;
}

module.exports = collect_same_elements;
