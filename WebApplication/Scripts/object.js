// @flow
//$ Object type


let obj1: { foo: boolean } = { foo: true };
let obj2: { 
  foo: number,
  bar: boolean,
  baz: string,
} = {
  foo: 1,       //* Works
  bar: false,   //* Works
  baz: 'three', //* Works
};

function method(obj: { foo: string }) {
  console.log(obj.foo);
}

method({
  foo: 'test',  // * Works
  bar: 42,      // * Works
});

function method2(obj: {| foo: string |}) {
  console.log(obj.foo);
}

// method2({
//   foo: 'test',  // * Works
//   bar: 42,      // ! Error
// })
