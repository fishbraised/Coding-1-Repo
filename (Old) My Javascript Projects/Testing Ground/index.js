let options = {
  method: "GET",
};

fetch("https://jsonplaceholder.typicode.com/users", options);

.then(function (response) {
  return response.status;
}).then(function (status) {
  console.log(status); // 200
});
