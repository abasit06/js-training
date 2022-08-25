// Group 3
export function parseUserData(data) {
  // TODO: return a new object with the properties of data
  // and these values applied as default for missing properties :
  const defaults = { name: "Anonymous", isAdmin: false };

  // data
  // { address : '123',
  //   name : 'Ajay'
  // }
  Object.entries(defaults).forEach(([key, value]) => {
    data[key] = data[key] || defaults[key];
  });

  //const newObj = Object.assign({}, data1, data2, data3)

  // 1 - using Object.assign
  // 2 - using spread operator on properties
  // 3 - using destructuring and default parameters for parseUserData

  return data;
}

export function parseUserDataObjectAssign(data) {
  // TODO: return a new object with the properties of data
  // and these values applied as default for missing properties :
  const defaults = { name: "Anonymous", isAdmin: false };

  // return Object.assign({}, defaults, data);
  return Object.assign(defaults, data);

  // return data;
}

export function parseUserDataSpread(data) {
  // TODO: return a new object with the properties of data
  // and these values applied as default for missing properties :
  const defaults = { name: "Anonymous", isAdmin: false };

  // 1 - using Object.assign
  // 2 - using spread operator on properties
  // 3 - using destructuring and default parameters for parseUserData

  // 2 - using spread operator on properties
  // data {
  //  name : suvha,
  //}
  // left to right
  return { ...defaults, ...data };
}

export function parseUserDataDestructuring({
  name = "Anonymous",
  isAdmin = false,
  ...data
}) {
  // TODO: return a new object with the properties of data
  // and these values applied as default for missing properties :
  const defaults = { name: "Anonymous", isAdmin: false };

  return { name, isAdmin, ...data };
}

export function parseUserDataDestructuring_Suvha({
  name = "Anonymous",
  isAdmin = false,
  ...data
}) {
  // TODO: return a new object with the properties of data
  // and these values applied as default for missing properties :

  return { ...defaults, ...data };
}
