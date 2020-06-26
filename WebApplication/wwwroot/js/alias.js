//$ type alias
let type1 = {
  foo: 1,
  //* Works
  bar: true,
  //* Works
  haz: 'sentence',
  //* Works
  baz: 'error' //* Works

}; // let type2: MyObject2 = {
//   foo: 1,           //* Works
//   bar: true,        //* Works
//   haz: 'sentence',  //* Works
//   baz: 'error'      //! Error
// }