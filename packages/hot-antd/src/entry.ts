

const lib = new Proxy(window.CODEMAOCONFIG, {
  get: (target, key) => window.CODEMAOCONFIG[key],
});

export default lib;
