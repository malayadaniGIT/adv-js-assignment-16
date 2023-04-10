const promise = Promise.resolve(1);
       
    const promise1 = new Promise((resolve, reject) => {
    setInterval(() => {
        promise.then(val => console.log(Math.floor(Math.random() * 10)));
    }, 1000)
    throw new Error("error");
    // promise.catch(val => console.log(Math.floor(Math.random() * 10)));
    });   
      promise1.catch((e) => {
        console.log(e);
      });