// function getFirstElement<ElementType>(array: ElementType[]) {
//   return array[0];
// }

// const numbers = [1, 2, 3];
// const firstNum = getFirstElement<number>(numbers);

// const strings = ["1", "2", "3"];
// const firstString = getFirstElement(strings);

// ##

// const input = document.querySelector<HTMLInputElement>(".input");

// input?.value;

// ##

// const a = [1, 2, 3];

// a.map(() => {
//   return ".";
// });

// ##

// const map = new Map<string, Map<string, number>>([[".", 1]]);

// map.set(".", 1);

// ##

// type ApiResponse<Data = { status: number }> = {
//   data: Data;
//   isError: boolean;
// };

type ApiResponse<Data extends object = { status: number }> = {
  data: Data;
  isError: boolean;
};

// type UserResponse = ApiResponse<{ name: string; age: number }>;
// type BlogResponse = ApiResponse<{ title: string }>;

// type StatusResponse = ApiResponse<{ status: number }>;

// const response: UserResponse = {
//   data: {
//     name: "Kyle",
//     age: 28,
//   },
//   isError: false,
// };

// const responseBlog: BlogResponse = {
//   data: {
//     title: "Typescript",
//   },
//   isError: false,
// };

// const response: ApiResponse<{ name: string }> = {
//   data: {
//     name: "hello",
//   },
//   isError: false,
// };

// const response: ApiResponse<{ name: string }> = {
//   data: {
//     name: "hello",
//   },
//   isError: false,
// };

const response: ApiResponse = {
  data: {
    name: "hello",
  },
  isError: false,
};
