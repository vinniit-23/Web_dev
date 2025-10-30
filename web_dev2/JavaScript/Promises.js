function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfull");
      } else {
        reject("found error in data fetch");
      }
    }, 3000);
  });
}

fetchData()
    .then((data) => {
        console.log(data);
        return "hello"
    }).then((value)=>{console.log(value);
    })
    .catch((error)=>{console.error(error);
    });
