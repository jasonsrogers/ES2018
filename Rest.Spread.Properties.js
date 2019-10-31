//Rest.Spread.Properties

console.log("Rest.Spread.Properties");

// ES2015 => rest/spread arrays
console.log("ES2015 => rest/spread arrays");
// group the remaining params
function groupTheRest(param1, param2, param3, ...restParams) {
  console.log(
    `param1 ${param1}, param2 ${param2}, param3 ${param3}, ...restParams ${restParams}, `
  );
}
console.log(groupTheRest("a", "b", "c", "d", "e", "f", "g"));

// spread array into list of params
console.log(Math.max(99, 100, -1, 48, 16));

const values = [99, 100, -1, 48, 16];
console.log(Math.max(...values));

// contact arrays/
let tab1 = [1, 2, -2, 4];
let tab2 = [4, 5, 6, -1];
let tab3 = ["a", "b", "z", "d"];

console.log([...tab1, ...tab2, ...tab3]);
//create array copies
let tab4 = [...tab1];
tab4.push("extra");

console.log(`tab1 [${tab1}], tab4 [${tab4}]`);

// ES2018 => rest/spread on object
console.log("ES2018 => rest/spread on object");

const myObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};
// deconstructs myObjects mapping attributes to matching variables name (f doesn't exist so is undefined)
// a is mapped to a different variable name, g is defaulted
const { a: remappedA, c = "A default", f, g = "A default", ...x } = myObject;
console.log(
  `remappedA: ${remappedA}, c: ${c}, f: ${f}, g: ${g}, x: ${JSON.stringify(x)}`
);

// function param splitting
function splittingParams({ a, b, c: cRemapped = "default", g, ...rest }) {
  console.log(
    `a: ${a}, b: ${b}, cRemapped: ${cRemapped}, rest: ${JSON.stringify(rest)}`
  );
}

splittingParams({
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7
});

// creating objects
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { c: 4, d: 5, e: 6 };
console.log(JSON.stringify({ ...obj1, ...obj2, z: "zoo" }));
