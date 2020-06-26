//$ Interface type
class Foo {
  serialize() {
    return '[Foo]';
  }

}

class Bar {
  serialize() {
    return '[Bar]';
  }

}

const foo = new Foo(); //* Works

const bar = new Bar(); //* Works

class Foo2 {
  serialize() {
    return '[Foo]';
  } //* Works


} // class Bar2 implements Serializable {
//   serialize() { return 2; } //! Error
// }