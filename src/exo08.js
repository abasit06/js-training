// try to solve the exercise using spread and rest operators

// TODO: return an object with properties being the list of received arguments,
// and the number of times each argument has been received as values
// Rest operator ...
export function count(...veggies) {
  let countObj = Object.assign(
    {},
    ...veggies.map((veggie) => {
      const count = veggies.filter((v) => v === veggie).length;
      return { [veggie]: count };
    })
  );

  return countObj;
}

export function count2(...veggies) {
  return veggies.reduce((countObj, veggie) => {
    let count = (countObj[veggie] || 0) + 1;
    return { ...countObj, [veggie]: count };
  }, {});
}

// example:
count("Carrot", "Cabbage", "Potato", "Cabbage", "Cabbage", "Carrot");
// { Carrot: 2, Cabbage: 3, Potato: 1 }

// TODO: return the argument that occurs the most times in the argument list
export function mostFrequentIn(...veggies) {
  let veggieCount = {};

  veggieCount = count(...veggies);
  let maxVeggie = "";
  let maxVeggieCount = 0;

  Object.entries(veggieCount).forEach(([veggie, veggieCount]) => {
    if (veggieCount > maxVeggieCount) {
      maxVeggie = veggie;
      maxVeggieCount = veggieCount;
    }
  });

  return maxVeggie;
}

export function mostFrequentIn2(...veggies) {
  const veggieCount = count(...veggies);
  const maxCount = Math.max(...Object.values(veggieCount));
  return veggies.find((veggie) => veggieCount[veggie] === maxCount);
}

// example:
mostFrequentIn(
  "Carrot",
  "Cabbage",
  "Potato",
  "Cabbage",
  "Cabbage",
  "Carrot"
) === "Cabbage";
