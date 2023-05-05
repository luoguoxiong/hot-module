
const add = (a: number, b: number) => a + b;

const path = (a: number, b: number) => a - b;

window.CODEMAOCONFIG = {
  add,
  path,
};

(async() => {
  await import('./app');
})();

