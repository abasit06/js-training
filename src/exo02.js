// return true if object `obj` has a property `key`
export function hasProperty(obj, key) {
  // also possible : obj !== null && obj[key] !== undefined;
  return key in obj;
}
// return true if object has some property with value `value`
export function hasPropertyValue(obj, value) {
  return obj !== null && Object.values(obj).some((e) => e === value);
}

// return the number of properties of the object (without delegated properties)
export function getNumberOfProperties(obj) {
  return obj !== null ? Object.keys(obj).length : 0;
}
