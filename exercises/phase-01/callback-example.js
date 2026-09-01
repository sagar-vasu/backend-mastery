function getUser(callback) {
  setTimeout(() => {
    const user = {
      id: 1,
      name: "Sagar",
    };

    callback(user);
  }, 1000);
}

console.log("Start");

getUser((user) => {
  console.log("User:", user);
});

console.log("End");
