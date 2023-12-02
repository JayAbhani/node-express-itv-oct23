function fetchData(callback) {
    setTimeout(() => {
      const data = 'Async data';
      callback(data);
    }, 1000);
  }
  
  function processData(data, callback) {
    setTimeout(() => {
      const processedData = data.toUpperCase();
      callback(processedData);
    }, 1000);
  }
  
  fetchData((result1) => {
    processData(result1, (result2) => {
      console.log(result2); // Output: "ASYNC DATA"
    });
  });

  // callback hell
  