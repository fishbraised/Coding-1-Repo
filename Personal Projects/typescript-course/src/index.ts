// let age = 18;
// if (age < 50) {
//     age += 10;
// }
// console.log(age);

// let sales: number = 123_456_789;
// let course: string = "TypeScript";
// let is_published: boolean = true;
// let level;

// function render(document: any) {
//   console.log(document);
// }

// let numbers: number[] = [];
// numbers[0] = 1;
// numbers.forEach(n => n.);

// let user: [number, string] = [1, "word"];
// user[0].
// user.push(1);

// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// function calculateTax(income: number, taxYear? = 2022): number {
//   if (taxYear < 2022) {
//     return income * 1.2;
//   } else {
//     return income * 1.3;
//   }
// }

// calculateTax(10_000, 2022);

// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "mosh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// employee.id = 0;

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "mosh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// function kgToLbs(weight: number | string): number {
//   // Narrowing
//   if (typeof weight === "number") {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }

// kgToLbs(10);
// kgToLbs("10kg");

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// Literal (exact, specific):

// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = "cm" | "inch";
// let metric: Metric = "lbs";

// function greet(name: string | null | undefined) {
//   if (name) {
//     console.log(name.toUpperCase());
//   } else {
//     console.log("Hola");
//   }
// }

// greet(null);

// type Customer = {
//   birthday?: Date;
// };

// function getCustomer(id: number): Customer | null {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(1);
// console.log(customer?.birthday?.getFullYear());

// customers?.[0];

// let log: any = null;
// log?.("a");
