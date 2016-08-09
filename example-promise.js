function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if((typeof a === 'number') && (typeof b === 'number')){
      resolve(a + b);
    }else {
        reject("- not numbers!")
    }
  })
};

addPromise(3,4).then(function(total){
  console.log(total);
}, function(err){
  console.log("Error " + err);
})

addPromise('d',4).then(function(total){
  console.log(total);
}, function(err){
  console.log("Error " + err);
})
