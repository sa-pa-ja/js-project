// const pi = Math.PI;
// console.log(pi);

const add = (a, b) => a + b;
console.log(add(20, 50));

const sum = (a, b) => {
  return a + b;
};

if (sum(1, 3) === 4) {
  console.log("Print to stdout with newline");
} else {
  console.log(
    "Multiple arguments can be passed, with the first used as the primary"
  );
}
