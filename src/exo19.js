export const addAliasForProperties = (object, alias) => {
  // TODO: return a Proxy for `object`
  // allowing to declare aliases for some properties
  // the alias can be used for both reading or writing a value on the aliased property
  return new Proxy(object, {
    get(obj, prop) {
      // user.lastName    prop === "lastName"
      // user.name
      return Reflect.get(obj, alias[prop] || prop);
    },
    set(obj, prop, value) {
      return Reflect.set(obj, alias[prop] || prop, value);
    }
    /*has(obj, prop) {
      return Reflect.has(obj, prop) || alias[prop];
    }*/
  });
};

// example:
const originalUser = { name: "Sanchez", first: "Rick" };
const user = addAliasForProperties(originalUser, {
  lastName: "name",
  firstName: "first"
});

// user.first === user.firstName;
// `${user.firstName} ${user.lastName}` === "Rick Sanchez"

export const countFunctionCalls = (fn) => {
  // TODO: return a Proxy for function `fn`
  // allowing to count the number of times this function has been called
  // the count can be retrieved with `fn.count`
  // BONUS: can we avoid assigning a new property count to fn ?

  let count = 0;
  return new Proxy(fn, {
    apply(obj, context, args) {
      count++;
      return Reflect.apply(obj, context, args);
    },

    get(obj, prop) {
      return prop === "count" ? count : Reflect.get(obj, prop);
    }
  });
};

// example:
const fn = countFunctionCalls((n) => n * 2);
fn(1);
fn(2);
fn(999);

// fn.count === 3
