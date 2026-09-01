function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Sagar",
      });
    }, 1000);
  });
}

console.log("Start");

getUser().then((user) => {
  console.log("User:", user);
});

console.log("End");
