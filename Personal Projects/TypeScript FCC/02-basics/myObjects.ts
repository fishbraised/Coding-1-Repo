// const User = {
//   name: "lewis",
//   email: "lewis@co.dev",
//   isActive: true,
// };

// function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

// let newUser = { name: "lewis", isPaid: false, email: "lewis@co.dev" };

// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// type Mystring = string;

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "l",
  email: "l@l.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "l@gmail.com";
// myUser._id = "asa";

export {};
