p1 = Promise.reject(50);
    p2 = 200
    p3 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'geek');
    });
  
    Promise.allSettled([p1, p2, p3]).then(function(values) 
    {
        console.log(values);
    }
    );