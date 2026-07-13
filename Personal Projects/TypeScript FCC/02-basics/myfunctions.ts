function addTwo(num: number): number {
  // num.ToUpperCase();
  return num + 2;
  // return "Hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
let myValue = addTwo(5);

addTwo(5);
getUpper("Lewis");
signUpUser("Lewis", "lewis@example.com", false);
loginUser("Lewis", "lewis@example.com");

// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

// const heros = ["thor", "spiderman", "ironman"];
const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
