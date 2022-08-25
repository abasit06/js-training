// return true if parameter is a primitive, or false otherwise
export function isPrimitive(x) {
  var isNull = isUndefinedOrNull(x);
  var isPrimitive = checkPrimitive(x);

  return isNull || isPrimitive;
}

function isUndefinedOrNull(x) {
  return x === undefined || x === null;
}

function checkPrimitive(x) {
  return (
    typeof x === "string" ||
    typeof x === "number" ||
    typeof x === "boolean" ||
    typeof x === "symbol"
  );
}
