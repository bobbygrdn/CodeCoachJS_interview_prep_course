/**
 * @class PubSub
 * @description A simple pub/sub class
 * @example const pubsub = new PubSub();
 */
class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
    // TODO: add the callback to the subscribers
    if(this.subscribers[event] === undefined || null) {
      this.subscribers[event] = [callback];
    } else {
      this.subscribers[event].push(callback);
    }
  }

  publish(event, data) {
    // TODO: call the callback with the data
    if(this.subscribers[event] === undefined || null) return;
    this.subscribers[event].forEach(callback => {
      callback(data);
    })
  }
}

/**
 * @class Singleton
 * @description A simple singleton class
 * @example const singleton = new Singleton();
 */
class Singleton {
  static instance;

  constructor() {
    // TODO: return the same instance
    if(Singleton.instance) {
      throw Error("Cannot create another instance")
    }
    Singleton.instance = true;
  }
}

module.exports = {
  Singleton,
  PubSub,
};
