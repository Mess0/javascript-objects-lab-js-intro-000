const recipes = {};

var updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign({}, object, { [key]: value })
}


var destructivelyUpdateObjectWithKeyAndValue =(object, key, value) =>{
  object[key] = value;
  return object;
}
console.log(object);


var deleteFromObjectByKey = (object, key) => {
  delete object.key
}
