var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var pair = {};
  pair[key] = value;
  return Object.assign({}, object, pair);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function 