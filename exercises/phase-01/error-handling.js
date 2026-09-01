function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  const result = divide(10, 0);

  console.log("Result:", result);
} catch (error) {
  console.error("Caught error:", error.message);
}

console.log("Program still running");