function task3(input = "1234567890") {
  let output = "";

  function createPhoneNumber(numbers) {
    if (!Array.isArray(numbers)) {
      return "Error: Input must be an array";
    }

    if (numbers.length !== 10) {
      return `Error: Array must contain exactly 10 numbers, got ${numbers.length}`;
    }

    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      if (!Number.isInteger(num) || num < 0 || num > 9) {
        return `Error: All elements must be integers between 0-9. Invalid value at position ${i}: ${num}`;
      }
    }

    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
  }

  function stringToDigitArray(str) {
    let digitsOnly = str.replace(/\D/g, "");

    if (digitsOnly.length !== 10) {
      return null;
    }

    return digitsOnly.split("").map((digit) => parseInt(digit));
  }

  let phoneArray;

  if (typeof input === "string") {
    phoneArray = stringToDigitArray(input);
    if (phoneArray === null) {
      output += "=== PHONE NUMBER FORMATTER ===\n\n";
      output += `Input: "${input}"\n`;
      output += "Error: Input must contain exactly 10 digits\n";
      output += "Example: '1234567890' or '123-456-7890'\n";
      console.log("Task 3 Error:", output);
      return output;
    }
  } else if (Array.isArray(input)) {
    phoneArray = input;
  } else {
    output +=
      "Error: Input must be a string of digits or an array of integers\n";
    console.log("Task 3 Error:", output);
    return output;
  }

  let formattedNumber = createPhoneNumber(phoneArray);

  output += "=== PHONE NUMBER FORMATTER ===\n\n";
  output += `Input: ${
    typeof input === "string" ? `"${input}"` : `[${input.join(", ")}]`
  }\n`;
  output += `Digit Array: [${phoneArray.join(", ")}]\n`;
  output += `Formatted Phone Number: ${formattedNumber}\n\n`;

  output += "Step-by-step formatting:\n";
  output += `Area Code: (${phoneArray[0]}${phoneArray[1]}${phoneArray[2]})\n`;
  output += `Exchange: ${phoneArray[3]}${phoneArray[4]}${phoneArray[5]}\n`;
  output += `Number: ${phoneArray[6]}${phoneArray[7]}${phoneArray[8]}${phoneArray[9]}\n`;
  output += `Result: (${phoneArray[0]}${phoneArray[1]}${phoneArray[2]}) ${phoneArray[3]}${phoneArray[4]}${phoneArray[5]}-${phoneArray[6]}${phoneArray[7]}${phoneArray[8]}${phoneArray[9]}\n\n`;

  output += "Additional Examples:\n";
  let examples = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    [5, 5, 5, 1, 2, 1, 2, 1, 2, 1],
  ];

  examples.forEach((example, index) => {
    output += `Example ${index + 1}: [${example.join(
      ", "
    )}] → ${createPhoneNumber(example)}\n`;
  });

  console.log("=== Task 3: Phone Number Formatter ===");
  console.log("Input:", input);
  console.log("Digit Array:", phoneArray);
  console.log("Formatted:", formattedNumber);
  console.log(
    "Function Definition: createPhoneNumber(array) returns formatted phone number"
  );

  return output;
}

if (typeof window === "undefined") {
  console.log("Testing with string input:");
  task3("1234567890");
  console.log("\nTesting with array input:");
  task3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
}
