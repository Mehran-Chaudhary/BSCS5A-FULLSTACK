// Task 4: RoundMe Function with Variable Arguments
function task4() {
  let output = "";

  // RoundMe function that can work on 0-N arguments
  function roundMe(...args) {
    // If no arguments, return 0
    if (args.length === 0) {
      return 0;
    }

    // If one argument, return single rounded value
    if (args.length === 1) {
      return Math.round(args[0]);
    }

    // If multiple arguments, return array of rounded values
    return args.map((num) => Math.round(num));
  }

  // Test the function with different scenarios
  output += "=== ROUNDME FUNCTION TESTS ===\n\n";

  // Test 1: No arguments
  let test1 = roundMe();
  output += `roundMe() → ${test1}\n`;
  output += `Type: ${typeof test1}\n\n`;

  // Test 2: Single argument
  let test2 = roundMe(4.7);
  output += `roundMe(4.7) → ${test2}\n`;
  output += `Type: ${typeof test2}\n\n`;

  // Test 3: Two arguments
  let test3 = roundMe(4.7, 4.4);
  output += `roundMe(4.7, 4.4) → [${test3.join(", ")}]\n`;
  output += `Type: ${typeof test3} (Array: ${Array.isArray(test3)})\n\n`;

  // Test 4: Multiple arguments
  let test4 = roundMe(1.2, 2.7, 3.1, 4.9, 5.5);
  output += `roundMe(1.2, 2.7, 3.1, 4.9, 5.5) → [${test4.join(", ")}]\n`;
  output += `Type: ${typeof test4} (Array: ${Array.isArray(test4)})\n\n`;

  // Test 5: Negative numbers
  let test5 = roundMe(-1.7, -2.3, -5.8);
  output += `roundMe(-1.7, -2.3, -5.8) → [${test5.join(", ")}]\n\n`;

  // Test 6: Edge cases
  let test6 = roundMe(0.5, -0.5, 1.5, -1.5);
  output += `roundMe(0.5, -0.5, 1.5, -1.5) → [${test6.join(", ")}]\n`;
  output +=
    "Note: JavaScript Math.round() rounds .5 up to the next integer\n\n";

  // Show function implementation details
  output += "FUNCTION IMPLEMENTATION:\n";
  output += "- Uses rest parameters (...args) to accept variable arguments\n";
  output += "- Returns 0 for no arguments\n";
  output += "- Returns single number for one argument\n";
  output += "- Returns array for multiple arguments\n";
  output += "- Uses Math.round() for rounding logic\n\n";

  // Show rounding rules
  output += "ROUNDING RULES (Math.round()):\n";
  output += "• 0.4 → 0 (rounds down)\n";
  output += "• 0.5 → 1 (rounds up)\n";
  output += "• 0.6 → 1 (rounds up)\n";
  output += "• -0.4 → -0 (rounds up toward zero)\n";
  output += "• -0.5 → -0 (rounds up toward zero)\n";
  output += "• -0.6 → -1 (rounds down)\n";

  // Log to console
  console.log("=== Task 4: RoundMe Function ===");
  console.log("roundMe():", roundMe());
  console.log("roundMe(4.7):", roundMe(4.7));
  console.log("roundMe(4.7, 4.4):", roundMe(4.7, 4.4));
  console.log(
    "roundMe(1.2, 2.7, 3.1, 4.9, 5.5):",
    roundMe(1.2, 2.7, 3.1, 4.9, 5.5)
  );
  console.log(
    "Function uses rest parameters (...args) to handle variable arguments"
  );

  return output;
}

// Custom test function for user input
function task4Custom(numbers = []) {
  let output = "";

  // Same roundMe function
  function roundMe(...args) {
    if (args.length === 0) {
      return 0;
    }
    if (args.length === 1) {
      return Math.round(args[0]);
    }
    return args.map((num) => Math.round(num));
  }

  if (numbers.length === 0) {
    let result = roundMe();
    output += "=== CUSTOM ROUNDME TEST ===\n\n";
    output += `roundMe() → ${result}\n`;
    output += "No arguments provided, returned 0\n";
  } else {
    let result = roundMe(...numbers);
    output += "=== CUSTOM ROUNDME TEST ===\n\n";
    output += `Input: [${numbers.join(", ")}]\n`;
    output += `roundMe(${numbers.join(", ")}) → `;

    if (numbers.length === 1) {
      output += `${result}\n`;
      output += `Type: ${typeof result}\n`;
    } else {
      output += `[${result.join(", ")}]\n`;
      output += `Type: Array with ${result.length} elements\n`;
    }

    // Show individual rounding
    output += "\nIndividual rounding:\n";
    numbers.forEach((num, index) => {
      output += `${num} → ${Math.round(num)}\n`;
    });
  }

  console.log("Custom RoundMe Test:", numbers, "→", roundMe(...numbers));
  return output;
}

// For standalone testing
if (typeof window === "undefined") {
  task4();
}
