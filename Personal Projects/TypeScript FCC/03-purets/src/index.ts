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
  protected _courseCount = 1;

  readonly city: string = "WAA";
  constructor(
    public email: string,
    public name: string,
    // private userId: string,
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;

  changeCourseCount() {
    this._courseCount = 4;
  }
}

const lewis = new User("l@l.com", "lewis");
// console.log(lewis);
// lewis.name;
// lewis.deleteToken;
