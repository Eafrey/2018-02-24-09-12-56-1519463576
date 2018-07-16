function create_updated_collection(collection_a, object_b) {
  object_b["value"].forEach(elementb => {
    collection_a.forEach(elementa => {
      if(elementa["key"] == elementb) {
        elementa["count"] -= parseInt(elementa["count"]/3);
      }
    });
  });
  return collection_a;
}

module.exports = create_updated_collection;
