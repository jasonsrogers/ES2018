// Promise.finally()
console.log("Promise.finally()");

function getAPromise({ successful = "", failure = "", throwError = "" }) {
  return new Promise(function(resolve, reject) {
    if (successful) {
      resolve(successful);
    } else if (failure) {
      reject(failure);
    } else if (throwError) {
      throw "Uh-oh!";
    }
  });
}

function addThen(promise) {
  return promise
    .then(
      val => {
        console.log(`then success: ${val}`);
      },
      val => {
        console.log(`then failure: ${val}`);
      }
    )
    .catch(val => {
      console.log(`catch: ${val}`);
    })
    .finally(() => {
      console.log(`finally`);
    });
}

var promise1 = new Promise(function(resolve, reject) {
  throw "Uh-oh!";
});

promise1.catch(function(error) {
  console.error(error);
});

addThen(getAPromise({ successful: "Resolve" }));

addThen(getAPromise({ failure: "reject" }));

addThen(getAPromise({ throwError: "an error" }));
