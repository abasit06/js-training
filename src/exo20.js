import data from "../__tests__/fakedata.json";

export const query = (array) =>
  Object.assign(array, {
    where(key, condition) {
      //TODO: filtering elements based on a condition on the value of property `key`
      let newArr = array.filter((ele) => condition(ele[key]));
      return query(newArr);
    },
    orderBy(key) {
      //TODO: sort elements based on the value of their property `key` sorted alphabetically
      // .sort((a,b) => -1  +1)
      let newArr = array.sort((a, b) => (a[key] < b[key] ? -1 : 1));
      return query(newArr);
    },
    take(number) {
      //TODO: return the N first elements of the list
      let newArr = array.slice(0, number);
      return query(newArr);
    }
  });

// exemple d'utilisation
console.log(
  query(data)
    .where("age", (n) => n >= 18)
    .orderBy("lastName")
    .take(5)
    .map((user) => `${user.firstName} ${user.lastName}`)
    .join("\n")
);
