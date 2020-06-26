// $ Boolean
let type1;
type1 = true; // * Works

type1 = false; // * Works
// type2 = 1;          // ! Error
// $ String

let type2;
type2 = 'aaaaaa'; //* Works
// type2 = true      //! Error
// type2 = 3         //! Error
// type2 = null      //! Error
// $ Number

let type3;
type3 = 1; //* Works

type3 = NaN; //* Works
// type3 = null        //! Error
// type3 = undefined   //! Error
//$ null

let type4;
type4 = null; //* Works
// type4 = 'string'    //! Error
// type4 = undefined   //! Error
//$ undefined (void in Flow types)

let type5;
type5 = undefined; //* Works
// type5 = null        //! Error
// type5 = NaN         //! Error
//$ Symbol

let type6;
type6 = Symbol('id'); //* Works
// type6 = 'id'          //! Error