//$ Object type
let obj1 = {
  foo: true
};
let obj2 = {
  foo: 1,
  //* Works
  bar: false,
  //* Works
  baz: 'three' //* Works

};

function method(obj) {
  console.log(obj.foo);
}

method({
  foo: 'test',
  // * Works
  bar: 42 // * Works

});

function method2(obj) {
  console.log(obj.foo);
} // method2({
//   foo: 'test',  // * Works
//   bar: 42,      // ! Error
// })