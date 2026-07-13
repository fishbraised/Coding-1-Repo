// let score: number | string = 33;

// score = 44;
// score = "55";

// type User = {
//   name: string;
//   id: number;
// };

// type Admin = {
//   username: string;
//   id: number;
// };

// let lewis: User | Admin = { name: "Lewis", id: 1 };
// lewis = { username: "lw", id: 334 };

// // function getDbId(id: number | string) {
// //   // making some API calls
// //   console.log(`DB id is: ${id}`);
// // }

// getDbId(3);
// getDbId("3");

// function getDbId(id: number | string) {
//   if (typeof id === "string") {
//     id.toLowerCase();
//   } else {
//     id + 2;
//   }
// }

// // array

// const data: number[] = [1, 2, 3];
// const data2: string[] = ["1", "2", "3"];
// // const data3: number | string[] = ["1", "2", "3"];
// // const data3: number[] | string[] = [1, 2, 3];
// // const data3: any[] = ["1", "2", 3, true];
// const data3: (number | string | boolean)[] = ["1", "2", 3, true];

// let pi: 3.14 = 3.14;
// // pi = 3.145;

// let seatAllotment: "aisle" | "middle" | "window";
// seatAllotment = "aisle";
// seatAllotment = "middle";
// seatAllotment = "window";
// // seatAllotment = "crew";
