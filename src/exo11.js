// Group 3
export function deduplicateArray(arr) {
  // 2 - with a Set and spread operator
  return [...new Set(arr)];
}

export function getPropertyFromValue(obj, val) {
  // TODO: return the name of the first property of `obj` with value `val`, or null if not found
  // 1 - with find and Object.keys methods
  // 2 - with a Map and Object.entries
  return Object.keys(obj).find((prop) => obj[prop] === val);
}

export function getPropertyFromValue2(obj, val) {
  // TODO: return the name of the first property of `obj` with value `val`, or null if not found
  // 1 - with find and Object.keys methods
  // 2 - with a Map and Object.entries
  // {
  //   a:1
  //   b:2
  // }
  let ans = null;
  Object.entries(obj).forEach(([key, currVal]) => {
    if (currVal === val) {
      ans = key;
    }
  });
  return ans;
}
