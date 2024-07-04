const str = "Hello, world! This is a string with special characters.";
const result = str.replace(/[^\\w\\s]/g, "");
console.log(result); // Output: HelloWorldThisisastringwithspecialcharacters.
