// GROUP 3

export function createPubSub() {
  const pubsub = {
    events: new Map(),
    // what are keys and values of this map ?
    allEventCallbacks: []
  };

  pubsub.on = function (event, callback) {
    // if event is any event, add it to special callback list and return
    if (event === "*") {
      this.allEventCallbacks.push(callback);
      return;
    }

    if (this.events.has(event)) {
      this.events.get(event).push(callback);
    } else {
      this.events.set(event, [callback]);
    }
  };

  pubsub.emit = function (event, data) {
    // TODO: call the callbacks registered for `event`
    let registeredCallbacks = pubsub.events.get(event);
    if (registeredCallbacks !== undefined) {
      registeredCallbacks.forEach((callback) => callback(data));
    }

    // after processing specific events, call callbacks listening to all events
    this.allEventCallbacks.forEach((callback) => callback(data));
  };

  pubsub.off = function (event, callback) {
    if (this.events.has(event)) {
      let index = this.events.get(event).indexOf(callback);
      this.events.get(event).splice(index, 1);
    }
  };

  // another solutions
  pubsub.off3 = function (event, callback) {
    // TODO
    // this.events.get(event) -> callback1, callback2, callback3
    // event : callback1, callback2, callback3
    if (this.events.has(event)) {
      // set the event that is not in the events list
      this.events.set(event, this.events.get(event).delete(callback));
    }
  };

  return pubsub;
}

// pubsub.on = function (event, callback) {
//   let existingCallback = this.events.get(event);
//   if (existingCallback === undefined) {
//     existingCallback = [];
//   }
//   existingCallback.push(callback);
//   this.events.set(event, existingCallback);
// };

// To go further:
// - add a method off(event, callback) to remove a subscription
// - on('*') to react to all events
