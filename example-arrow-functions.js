var names = ['Andy', 'James', 'Mike'];

names.forEach(function (name){
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowfunc', name)
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('James'));

var person = {
  name: 'James',
  greet: function(){
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();

function add(a, b){
  return a + b;
};

var addStatement = ((a, b) => {
  return a + b;
})

var addExpression = (a , b) => a + b;

console.log(add(2, 3));
console.log(add(4, 6));
console.log(addStatement( 6,6));
console.log(addExpression( 5, 6));
