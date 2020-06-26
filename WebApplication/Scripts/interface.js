// @flow
//$ Interface type

interface Serializable {
  serialize(): string
}

class Foo {
  serialize() { return '[Foo]'; }
}

class Bar {
  serialize() { return '[Bar]'; }
}

const foo: Serializable = new Foo(); //* Works
const bar: Serializable = new Bar(); //* Works

class Foo2 implements Serializable {
  serialize() { return '[Foo]'; } //* Works
}

// class Bar2 implements Serializable {
//   serialize() { return 2; } //! Error
// }
