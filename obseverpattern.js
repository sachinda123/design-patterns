const Subject = () => {
  this.observers = [];
};

Subject.prototype = {
  subscribe: (fn) => {
    this.observers.push(fn);
  },
  unsubscribe: (fnRemove) => {},
  fire: () => {
    this.observers.array.forEach((fn) => {
      fn.call();
    });
  },
};
