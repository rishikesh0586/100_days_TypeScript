const str = "Hello, world! This is a string with duplicates.";
const charSet = new Set<string>();
let result = "";
for (const char of str) {
  if (!charSet.has(char)) {
    charSet.add(char);
    result += char;
  }
}
console.log(result); // Output: Heo, wrd! Ti sa rng wth duplcat.
