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

async function run() {
  console.log("Start");

  const user = await getUser();

  console.log("User:", user);
  console.log("End");
}

run();