// console.log("Hello, TypeScript!!");
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city = "";
//   }
// }
// #name: string;  IS THE SAME AS  private name: string;  //
class User {
    email;
    name;
    city = "WAA";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const lewis = new User("l@l.com", "lewis");
console.log(lewis);
export {};
// lewis.name;
//# sourceMappingURL=index.js.map