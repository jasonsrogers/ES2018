// Asynchronous Iteration

// built in iterators

for (item of new Map([[1, "a"], [2, "b"], [3, "c"]])) {
  console.log("item ", item);
}
console.log("======");
for (item of new Set([1, 2, 3])) {
  console.log("item ", item);
}
console.log("======");
for (item of new Set("123")) {
  console.log("item ", item);
}

console.log("=====");
let count = 5;
// bare bone iterator
let it = {
  next: function() {
    let value = Math.random() * 1000;
    return count-- ? { value, done: false } : { done: true };
  },
  [Symbol.iterator]: function() {
    return this;
  }
};
for (item of it) {
  console.log(item);
}
console.log("=====");
function* myIteratorGenerator(initValue = 1, increment = 10) {
  let res = initValue;
  for (let i = 0; i < 10; i++) {
    yield res;
    res += increment;
  }
}
for (item of myIteratorGenerator()) {
  console.log(item);
}
console.log("=====");
for (item of myIteratorGenerator(4, 7)) {
  console.log(item);
}
console.log("=====");

// Asynchronous Iteration

console.log(`
With the arrival of async/await you will want to call async
inside a synchronous loop.
`);

function mockAsync(
  text = "A log text",
  timeout = Math.floor(Math.random() * 5 + 1) * 1000
) {
  console.log(`text: ${text}, timeout: ${timeout}`);

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(`resolve mockAsync callback: ${text} delayed for ${timeout}`);
      resolve(`callback mockAsync callback: ${text} delayed for ${timeout}`);
    }, timeout);
  });
}

async function* asyncGenerator(array) {
  for (item of array) {
    yield mockAsync(item);
  }
}

(async () => {
  async function process(array) {
    console.log(
      "This will not wait for the calls to resolves before triggering the next"
    );
    for (let i of array) {
      let res = await mockAsync(i);
      console.log(">>>", res);
    }
  }
  let tab = [
    "call 1.1",
    "call 1.2",
    "call 1.3"
    "call 1.4",
    "call 1.5",
    "call 1.6"
  ];
  await process(tab);

  console.log("=====");
  console.log("=====");
  console.log("=====");
  async function process2(array) {
    console.log(
      "This will not wait for the calls to resolves before triggering the next"
    );
    array.forEach(async i => {
      await mockAsync(i);
      console.log(">>>", i);
    });
  }
  tab = [
    "call 2.1",
    "call 2.2",
    "call 2.3",
    "call 2.4",
    "call 2.5",
    "call 2.6"
  ];
  await process2(tab);

  console.log("=====");
  console.log("=====");
  console.log("=====");
  async function process3(array) {
    console.log(
      "This will wait for the calls to resolves before triggering the next"
    );
    for await (t of asyncGenerator(array)) {
      console.log(">>>", t);
    }
  }
  await process3([
    "call 3.1",
    "call 3.2",
    "call 3.3"
    "call 3.4",
    "call 3.5",
    "call 3.6"
  ]);
  console.log("=====");
})();
