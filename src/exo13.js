// we assume all the functions to be promisified have this signature:
// fn(function callback(error, result){ ... }, ...otherArgs);
export function promisify1(fn) {
  // TODO: return a function calling fn with the signature above
  // but taking no callback argument and returning a Promise instead
  const promise = new Promise((resolve, reject) => {
    const callback = (err, result) => (err ? reject(err) : resolve(result));
    fn(callback);
  });

  return promise;
}

export function promisify(fn) {
  // TODO: return a function calling fn with the signature above
  // but taking no callback argument and returning a Promise instead
  return (...otherArgs) =>
    new Promise((resolve, reject) => {
      const callback = (err, result) => (err ? reject(err) : resolve(result));
      fn(callback, ...otherArgs);
    });
}

export function promisify3(fn) {
  // TODO: return a function calling fn with the signature above
  // but taking no callback argument and returning a Promise instead
  return function (...callBackArgs) {
    return new Promise((resolve, reject) => {
      const callback = (err, result) => (err ? reject(err) : resolve(result));
      fn(callback, ...callBackArgs);
    });
  };
}

export function promisify2(fn) {
  // TODO: return a function calling fn with the signature above
  // but taking no callback argument and returning a Promise instead
  const promise = new Promise((resolve, reject) => {
    const callback = (err, result) => (err ? reject(err) : resolve(result));
    let fucntion = fn(callback);
  });
}

// example:
const wait = promisify(setTimeout);
wait(1000)
  .then(() => {
    console.log("1");
    return wait(1000);
  })
  .then(() => {
    console.log("2");
    return wait(1000);
  })
  .then(() => {
    console.log("3");
  });
