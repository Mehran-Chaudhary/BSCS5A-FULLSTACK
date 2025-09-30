// Task 1: Biography using variables and objects
function task1() {
  // Using 'var' to store biography in variables with appropriate primitive types
  var fullName = "Ahmad Hassan"; // string
  var age = 20; // number
  var isStudent = true; // boolean
  var gpa = 3.85; // number (float)
  var hobbies = "Programming, Reading, Gaming"; // string

  // Creating JS Object for biography with nested objects
  var biography = {
    name: fullName,
    age: age,
    isStudent: isStudent,
    gpa: gpa,

    // Nested object for address
    address: {
      street: "123 University Road",
      city: "Islamabad",
      country: "Pakistan",
      postalCode: "44000",
    },

    // Nested object for degree programs
    degreeProgram: {
      current: "Bachelor of Science in Computer Science",
      semester: "5th Semester",
      university: "Air University",
      expectedGraduation: "2027",
    },

    // Additional nested object for contact information
    contact: {
      email: "ahmad.hassan@student.au.edu.pk",
      phone: "+92-300-1234567",
      linkedin: "linkedin.com/in/ahmad-hassan",
    },

    // Array of skills
    skills: ["JavaScript", "Python", "HTML/CSS", "React", "Node.js"],

    hobbies: hobbies,
  };

  // Print biography on console (formatted, not entire object)
  let output = "";
  output += "=== PERSONAL BIOGRAPHY ===\n\n";
  output += `Name: ${biography.name}\n`;
  output += `Age: ${biography.age} years old\n`;
  output += `Student Status: ${
    biography.isStudent ? "Active Student" : "Not a Student"
  }\n`;
  output += `Current GPA: ${biography.gpa}\n\n`;

  output += "📍 ADDRESS:\n";
  output += `${biography.address.street}\n`;
  output += `${biography.address.city}, ${biography.address.country}\n`;
  output += `Postal Code: ${biography.address.postalCode}\n\n`;

  output += "🎓 DEGREE PROGRAM:\n";
  output += `Program: ${biography.degreeProgram.current}\n`;
  output += `Current: ${biography.degreeProgram.semester}\n`;
  output += `University: ${biography.degreeProgram.university}\n`;
  output += `Expected Graduation: ${biography.degreeProgram.expectedGraduation}\n\n`;

  output += "📞 CONTACT INFORMATION:\n";
  output += `Email: ${biography.contact.email}\n`;
  output += `Phone: ${biography.contact.phone}\n`;
  output += `LinkedIn: ${biography.contact.linkedin}\n\n`;

  output += "💻 TECHNICAL SKILLS:\n";
  output += biography.skills.join(", ") + "\n\n";

  output += `🎯 HOBBIES: ${biography.hobbies}\n\n`;

  // Also log to browser console
  console.log("=== Task 1: Biography ===");
  console.log("Variables used:");
  console.log("fullName (string):", fullName);
  console.log("age (number):", age);
  console.log("isStudent (boolean):", isStudent);
  console.log("gpa (number):", gpa);
  console.log("hobbies (string):", hobbies);
  console.log("\nBiography Object:", biography);
  console.log("\nFormatted Biography:\n" + output);

  return output;
}

// For standalone testing
if (typeof window === "undefined") {
  task1();
}
