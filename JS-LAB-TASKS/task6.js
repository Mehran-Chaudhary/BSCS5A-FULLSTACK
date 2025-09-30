function task6(x = 3, y = 5, z = 10) {
  let output = "";

  function sumOfMultiples(x, y, z) {
    let multiples = [];
    let sum = 0;

    for (let i = 1; i < z; i++) {
      if (i % x === 0 || i % y === 0) {
        multiples.push(i);
        sum += i;
      }
    }

    return {
      multiples: multiples,
      sum: sum,
    };
  }

  if (x <= 0 || y <= 0 || z <= 0) {
    output += "=== SUM OF MULTIPLES ===\n\n";
    output += "Error: All values (x, y, z) must be positive integers\n";
    output += `Given: x=${x}, y=${y}, z=${z}\n`;
    return output;
  }

  let result = sumOfMultiples(x, y, z);

  output += "=== SUM OF MULTIPLES ===\n\n";
  output += `Find sum of all multiples of ${x} or ${y} below ${z}\n\n`;

  if (x === 3 && y === 5 && z === 10) {
    output += "Example from problem statement:\n";
    output += "Natural numbers below 10 that are multiples of 3 or 5:\n";
  } else {
    output += `Natural numbers below ${z} that are multiples of ${x} or ${y}:\n`;
  }

  let multipleDetails = [];
  for (let num of result.multiples) {
    let factors = [];
    if (num % x === 0) factors.push(`${x}`);
    if (num % y === 0) factors.push(`${y}`);
    multipleDetails.push(`${num} (multiple of ${factors.join(" and ")})`);
  }

  output += result.multiples.join(", ") + "\n\n";

  output += "Detailed breakdown:\n";
  multipleDetails.forEach((detail) => {
    output += `• ${detail}\n`;
  });
  output += "\n";

  if (result.multiples.length > 0) {
    output += `Sum calculation: ${result.multiples.join(" + ")} = ${
      result.sum
    }\n\n`;
  } else {
    output += "No multiples found\n\n";
  }

  output += "Step-by-step checking:\n";
  for (let i = 1; i < z; i++) {
    let isMultipleOfX = i % x === 0;
    let isMultipleOfY = i % y === 0;
    let isIncluded = isMultipleOfX || isMultipleOfY;

    let explanation = "";
    if (isMultipleOfX && isMultipleOfY) {
      explanation = `multiple of both ${x} and ${y}`;
    } else if (isMultipleOfX) {
      explanation = `multiple of ${x}`;
    } else if (isMultipleOfY) {
      explanation = `multiple of ${y}`;
    } else {
      explanation = "not a multiple";
    }

    output += `${i}: ${explanation} → ${isIncluded ? "INCLUDE" : "skip"}\n`;
  }
  output += "\n";

  output += "Additional test cases:\n";
  let testCases = [
    { x: 3, y: 5, z: 20 },
    { x: 2, y: 7, z: 15 },
    { x: 4, y: 6, z: 25 },
  ];

  testCases.forEach((testCase) => {
    let testResult = sumOfMultiples(testCase.x, testCase.y, testCase.z);
    output += `Multiples of ${testCase.x} or ${testCase.y} below ${testCase.z}: `;
    output += `[${testResult.multiples.join(", ")}] = ${testResult.sum}\n`;
  });

  output += `\n🎯 FINAL ANSWER: ${result.sum}\n`;

  console.log("=== Task 6: Sum of Multiples ===");
  console.log(`Parameters: x=${x}, y=${y}, z=${z}`);
  console.log("Multiples found:", result.multiples);
  console.log("Sum:", result.sum);
  console.log(
    "Function: sumOfMultiples(x, y, z) finds all numbers < z that are multiples of x OR y"
  );

  return output;
}

if (typeof window === "undefined") {
  console.log("Testing with default values (3, 5, 10):");
  task6(3, 5, 10);
  console.log("\nTesting with (3, 5, 20):");
  task6(3, 5, 20);
}
