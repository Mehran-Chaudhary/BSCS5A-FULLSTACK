// Task 2: Find the next prime number using loops and let keyword
function task2(givenPrime = 11) {
  let output = "";

  // Function to check if a number is prime
  function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    // Check odd divisors up to sqrt(num)
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Validate that the given number is actually prime
  if (!isPrime(givenPrime)) {
    output += `Error: ${givenPrime} is not a prime number!\n`;
    output += "Please enter a valid prime number.\n\n";

    // Show first six prime numbers as reference
    output += "First six prime numbers: ";
    let primes = [];
    let num = 2;
    while (primes.length < 6) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
    output += primes.join(", ");

    console.log("Task 2 Error:", output);
    return output;
  }

  // Find the next prime number after the given prime
  let nextNumber = givenPrime + 1;

  // Use let keyword in loop to find next prime
  while (true) {
    let isCurrentPrime = isPrime(nextNumber);

    if (isCurrentPrime) {
      break;
    }
    nextNumber++;
  }

  // Display results
  output += "=== PRIME NUMBER FINDER ===\n\n";
  output += `Given prime number: ${givenPrime}\n`;
  output += `Next prime number: ${nextNumber}\n\n`;

  // Show the sequence
  output += "Prime sequence around the given number:\n";
  let sequencePrimes = [];
  let temp = givenPrime - 10;
  while (sequencePrimes.length < 6) {
    if (isPrime(temp)) {
      sequencePrimes.push(temp);
    }
    temp++;
  }
  output += sequencePrimes.join(" → ") + ` → ${nextNumber}\n\n`;

  // Show verification
  output += "Verification:\n";
  output += `${givenPrime} is prime: ${isPrime(givenPrime)}\n`;
  output += `${nextNumber} is prime: ${isPrime(nextNumber)}\n\n`;

  // Show numbers checked between given prime and next prime
  if (nextNumber - givenPrime > 1) {
    output += `Numbers checked between ${givenPrime} and ${nextNumber}:\n`;
    for (let i = givenPrime + 1; i < nextNumber; i++) {
      output += `${i} (prime: ${isPrime(i)}) `;
    }
    output += "\n";
  }

  // Log to console
  console.log("=== Task 2: Next Prime Number ===");
  console.log(`Given prime: ${givenPrime}`);
  console.log(`Next prime: ${nextNumber}`);
  console.log("Using 'let' keyword in loops for variable declarations");

  return output;
}

// For standalone testing
if (typeof window === "undefined") {
  console.log("Testing with prime 11:");
  task2(11);
  console.log("\nTesting with prime 13:");
  task2(13);
}
