function findFirstNonRepeatingAndRepeating(str) {
    const charMap = new Map();
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charMap.set(char, (charMap.get(char) || 0) + 1); // Increment count or set to 1
    }
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charMap.get(char) === 1) {
        return {
          firstNonRepeating: char,
          firstRepeating: null, // No repeating char found yet
        };
      } else if (charMap.get(char) > 1) {
        return {
          firstNonRepeating: null,
          firstRepeating: char,
        };
      }
    }
  
    // If no characters were found (all characters repeated)
    return { firstNonRepeating: null, firstRepeating: null };
  }
  
  const str = "Hello, world!";
  const result = findFirstNonRepeatingAndRepeating(str);
  console.log("First non-repeating:", result.firstNonRepeating);
  console.log("First repeating:", result.firstRepeating);
  