// Task 5: Math Functions (abs, ceil, floor) with Variable Arguments
function task5() {
  let output = "";

  // Abs function that can work on 0-N arguments
  function abs(...args) {
    if (args.length === 0) {
      return 0;
    }
    if (args.length === 1) {
      return Math.abs(args[0]);
    }
    return args.map((num) => Math.abs(num));
  }

  // Ceil function that can work on 0-N arguments
  function ceil(...args) {
    if (args.length === 0) {
      return 0;
    }
    if (args.length === 1) {
      return Math.ceil(args[0]);
    }
    return args.map((num) => Math.ceil(num));
  }

  // Floor function that can work on 0-N arguments
  function floor(...args) {
    if (args.length === 0) {
      return 0;
    }
    if (args.length === 1) {
      return Math.floor(args[0]);
    }
    return args.map((num) => Math.floor(num));
  }

  // Test numbers
  let testNumbers = [4.7, -3.2, 5.1, -7.9, 0.5, -0.5];

  output += "=== MATH FUNCTIONS IMPLEMENTATION ===\n\n";

  // Test 1: No arguments
  output += "Testing with NO ARGUMENTS:\n";
  output += `abs() → ${abs()}\n`;
  output += `ceil() → ${ceil()}\n`;
  output += `floor() → ${floor()}\n\n`;

  // Test 2: Single argument
  output += "Testing with SINGLE ARGUMENT (4.7):\n";
  output += `abs(4.7) → ${abs(4.7)} (type: ${typeof abs(4.7)})\n`;
  output += `ceil(4.7) → ${ceil(4.7)} (type: ${typeof ceil(4.7)})\n`;
  output += `floor(4.7) → ${floor(4.7)} (type: ${typeof floor(4.7)})\n\n`;

  // Test 3: Multiple arguments
  output += "Testing with MULTIPLE ARGUMENTS:\n";
  output += `Input numbers: [${testNumbers.join(", ")}]\n\n`;

  let absResult = abs(...testNumbers);
  let ceilResult = ceil(...testNumbers);
  let floorResult = floor(...testNumbers);

  output += `abs(${testNumbers.join(", ")}) → [${absResult.join(", ")}]\n`;
  output += `ceil(${testNumbers.join(", ")}) → [${ceilResult.join(", ")}]\n`;
  output += `floor(${testNumbers.join(", ")}) → [${floorResult.join(
    ", "
  )}]\n\n`;

  // Detailed comparison table
  output += "DETAILED COMPARISON TABLE:\n";
  output += "Number  | abs()  | ceil() | floor()\n";
  output += "--------|--------|--------|--------\n";

  testNumbers.forEach((num) => {
    let numStr = num.toString().padEnd(7);
    let absVal = Math.abs(num).toString().padEnd(6);
    let ceilVal = Math.ceil(num).toString().padEnd(6);
    let floorVal = Math.floor(num).toString().padEnd(7);
    output += `${numStr} | ${absVal} | ${ceilVal} | ${floorVal}\n`;
  });

  output += "\n";

  // Explanation of functions
  output += "FUNCTION EXPLANATIONS:\n";
  output += "• abs(): Returns absolute value (distance from zero)\n";
  output += "  - abs(-5) = 5, abs(5) = 5\n";
  output += "• ceil(): Rounds UP to nearest integer (ceiling)\n";
  output += "  - ceil(4.1) = 5, ceil(-4.9) = -4\n";
  output += "• floor(): Rounds DOWN to nearest integer (floor)\n";
  output += "  - floor(4.9) = 4, floor(-4.1) = -5\n\n";

  // Edge cases
  output += "EDGE CASES:\n";
  let edgeCases = [0, -0, 0.5, -0.5, 1.0, -1.0];
  output += `Testing: [${edgeCases.join(", ")}]\n`;
  output += `abs(): [${abs(...edgeCases).join(", ")}]\n`;
  output += `ceil(): [${ceil(...edgeCases).join(", ")}]\n`;
  output += `floor(): [${floor(...edgeCases).join(", ")}]\n\n`;

  // Implementation details
  output += "IMPLEMENTATION FEATURES:\n";
  output += "✓ Uses rest parameters (...args) for variable arguments\n";
  output += "✓ Returns 0 when no arguments provided\n";
  output += "✓ Returns single value for one argument\n";
  output += "✓ Returns array for multiple arguments\n";
  output += "✓ Leverages built-in Math functions for accuracy\n";

  // Log to console
  console.log("=== Task 5: Math Functions ===");
  console.log("abs():", abs());
  console.log("abs(4.7):", abs(4.7));
  console.log("abs(-3.2, 5.1):", abs(-3.2, 5.1));
  console.log("ceil(4.7, -3.2):", ceil(4.7, -3.2));
  console.log("floor(4.7, -3.2):", floor(4.7, -3.2));
  console.log(
    "All functions implement variable argument pattern like roundMe()"
  );

  return output;
}

// Custom test function for user input
function task5Custom(numbers = []) {
  let output = "";

  // Same functions as above
  function abs(...args) {
    if (args.length === 0) return 0;
    if (args.length === 1) return Math.abs(args[0]);
    return args.map((num) => Math.abs(num));
  }

  function ceil(...args) {
    if (args.length === 0) return 0;
    if (args.length === 1) return Math.ceil(args[0]);
    return args.map((num) => Math.ceil(num));
  }

  function floor(...args) {
    if (args.length === 0) return 0;
    if (args.length === 1) return Math.floor(args[0]);
    return args.map((num) => Math.floor(num));
  }

  if (numbers.length === 0) {
    output += "=== CUSTOM MATH FUNCTIONS TEST ===\n\n";
    output += "No arguments provided:\n";
    output += `abs() → ${abs()}\n`;
    output += `ceil() → ${ceil()}\n`;
    output += `floor() → ${floor()}\n`;
  } else {
    let absResult = abs(...numbers);
    let ceilResult = ceil(...numbers);
    let floorResult = floor(...numbers);

    output += "=== CUSTOM MATH FUNCTIONS TEST ===\n\n";
    output += `Input: [${numbers.join(", ")}]\n\n`;

    if (numbers.length === 1) {
      output += `abs(${numbers[0]}) → ${absResult}\n`;
      output += `ceil(${numbers[0]}) → ${ceilResult}\n`;
      output += `floor(${numbers[0]}) → ${floorResult}\n`;
    } else {
      output += `abs(${numbers.join(", ")}) → [${absResult.join(", ")}]\n`;
      output += `ceil(${numbers.join(", ")}) → [${ceilResult.join(", ")}]\n`;
      output += `floor(${numbers.join(", ")}) → [${floorResult.join(", ")}]\n`;
    }

    output += "\nDetailed breakdown:\n";
    numbers.forEach((num, index) => {
      output += `${num}: abs=${Math.abs(num)}, ceil=${Math.ceil(
        num
      )}, floor=${Math.floor(num)}\n`;
    });
  }

  console.log("Custom Math Functions Test:", numbers);
  console.log("abs:", abs(...numbers));
  console.log("ceil:", ceil(...numbers));
  console.log("floor:", floor(...numbers));

  return output;
}

// For standalone testing
if (typeof window === "undefined") {
  task5();
}
