// return an object with values and keys inverted
// we assume all values to be strings
// { a: "b" } => { b: "a" }

// Group 3
export function invertKeysAndValues(obj) {
  var newObj = {};

  Object.entries(obj).forEach(([k, v]) => {
    newObj[v] = k;
  });
  return newObj;
}

// another working solution
export function invertKeysAndValues2(obj) {
  var newObj = {};

  Object.keys(obj).forEach((key) => {
    newObj[obj[key]] = key;
  });

  return newObj;
}
