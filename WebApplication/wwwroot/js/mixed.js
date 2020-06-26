//$ Mixed Type
let mixed1;
mixed1 = 2; //* Works

mixed1 = '2'; //* Works
// mixed1 = true  //! Error
//? mixed annotation

let mixed2;
mixed2 = 2; //* Works

mixed2 = '2'; //* Works

mixed2 = true; //* Works

function stringify(value) {
  console.log(value);
}

stringify(2); //* Works

stringify('2'); //* Works

stringify(true); //* Works

function stringify2(value) {
  // return "" + value;  //! Error
  if (typeof value === 'string') {
    return "" + value; //* Works
  } else {
    return "";
  }
}

stringify("foo");