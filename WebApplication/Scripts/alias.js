// @flow
//$ type alias

type MyObject = {
  foo: number,
  bar: boolean,
  haz: string,
};

let type1: MyObject = {
  foo: 1,           //* Works
  bar: true,        //* Works
  haz: 'sentence',  //* Works
  baz: 'error'      //* Works
}

type MyObject2 = {|
  foo: number,
  bar: boolean,
  haz: string,
|}

// let type2: MyObject2 = {
//   foo: 1,           //* Works
//   bar: true,        //* Works
//   haz: 'sentence',  //* Works
//   baz: 'error'      //! Error
// }
