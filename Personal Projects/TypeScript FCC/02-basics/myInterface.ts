interface User {
  readonly dbId?: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  gitHubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const lewis: Admin = {
  email: "l@l.com",
  userId: 2211,
  gitHubToken: "githubtoken",
  role: "admin",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "lewis", off: 10) => {
    return 10;
  },
};
lewis.email = "l@lc.com";
// lewis.dbId = 33;
