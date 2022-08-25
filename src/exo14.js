export function Observable(action) {
  this.subscribers = [];
  //this.subscribers.push(action);
  action({
    next(value) {
      this.subscribers.forEach((e) => e.next(value));
    },
    complete() {
      //TODO: notify subscribers of completion
      this.subscribers.forEach((e) => e.complete());
    }
  });
}

Observable.prototype.subscribe = function (subscriber) {
  this.subscribers.push(subscriber);
  return subscriber;
};

// export function Observable(action) {
//   this.observers = [];
//   action({
//     next(value) {
//       //TODO: notify subscribers of a new value emitted
//       this.observers.forEach((obj) => obj.next(value));
//     },
//     complete() {
//       //TODO: notify subscribers of completion
//       this.observers.forEach((obj) => obj.complete());
//     }
//   });
// }

// Observable.prototype.subscribe = function (subscriber) {
//   //TODO: register the subscriber
//   this.observers.push(subscriber);

//   return subscriber;
// };

/* usage example: */
/*
const Lottery = new Observable(function draw({ next, complete }) {
  setTimeout(() => {
    next(28)
    next(16)
    next(36)
    next(42)
    complete()
  }, timeBeforeLotteryDraw)
})

let michel = Lottery.subscribe({
  next(number){
    if(michel.numbers.includes(number)) michel.correctNumbers++;
  },
  complete(){
    alert(`Michel had ${michel.correctNumbers} correct numbers !`)
  }
})

michel.numbers = [7, 13, 36, 49]
michel.correctNumbers = 0
if(michel.turnsOffTV) michel.unsubscribe()
*/
