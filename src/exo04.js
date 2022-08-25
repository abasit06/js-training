/*
const user = { name: "joe", age: 18 }
spyOnProperty(user, "name", function onRead(){
  console.log("someone has read property name")
}, function onWrite(newName){
  console.log("someone has changed the property name to" + newName)
})
*/

// Group 3
export function spyOnProperty(obj, prop, onRead, onWrite) {
  // change the descriptor of property `prop` of `obj`:
  // - call onRead() when property is accessed
  // - call onWrite(newValue) when property is reassigned
  // these functions are just observers, they do not return anything
  // however it should still be possible to read and write a value for property `prop`

  // use another variable to keep track of obj[prop]
  // to not create infinite read/write callbacks
  var initialValue = obj[prop];

  // never call obj[prop] inside property descriptors
  Object.defineProperty(obj, prop, {
    get: function () {
      onRead();
      return initialValue;
    },
    set: function (valueAssigned) {
      onWrite(valueAssigned);
      initialValue = valueAssigned;
    }
  });
}

export function setPrivatesAndConstants(obj) {
  // change the descriptor of every property of the object:
  // properties with names starting with an underscore _ must be non enumerable
  // properties with names starting with an uppercase letter (A-Z) must be non writable and non configurable
  Object.keys(obj).forEach((o) => {
    Object.defineProperty(obj, o, {
      enumerable: !o.startsWith("_"),
      writable: !/^[A-Z]/.test(o),
      configurable: !/^[A-Z]/.test(o)
    });
  });
}
