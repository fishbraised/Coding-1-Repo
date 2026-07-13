console.log(1);

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

// console.log(add(5, 3));

// export default add;
// module.exports = {}; empty by default
// module.exports = add;

// export add func()
// export sub func()
module.exports["addition"] = add;
module.exports.subtract = sub;
