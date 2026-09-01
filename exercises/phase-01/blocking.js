console.log("start");

setTimeout(() => {
  console.log("timer finished");
}, 1000);

const start = Date.now();

while (Date.now() - start < 5000) {
  // block for 5 seconds
}

console.log("end");