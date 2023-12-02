function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Async data";
      resolve(data);
    }, 1000);
  });
}

function* processDataGenerator() {
  const result1 = yield fetchData();
  const result2 = yield processData(result1);
  console.log(result2); // Output: "ASYNC DATA"
}

function runGenerator(generator) {
  const iterator = generator();

  function handleNext(value) {
    const next = iterator.next(value);

    if (!next.done) {
      next.value.then(handleNext);
    }
  }

  handleNext();
}

runGenerator(processDataGenerator);
