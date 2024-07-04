function findMaxMinCharOccurrence(str: string): { maxChar: string; minChar: string } {
    const charMap: Map<string, number> = new Map();
    for (const char of str) {
      const count = charMap.get(char) || 0;
      charMap.set(char, count + 1);
    }
  
    let maxChar = ' ';
    let maxCount = 0;
    let minChar = ' ';
    let minCount = Number.MAX_VALUE; // Initialize with maximum possible value
  
    for (const [char, count] of charMap.entries()) {
      if (count > maxCount) {
        maxChar = char;
        maxCount = count;
      }
      if (count < minCount && count > 0) { // Ignore characters with count 0 (not appearing)
        minChar = char;
        minCount = count;
      }
    }
  
    return { maxChar, minChar };
  }
  
  const str = "Hello, world! This is an example.";
  const result = findMaxMinCharOccurrence(str);
  console.log("Maximum occurring character:", result.maxChar, "(", result.maxChar, "times)");
  console.log(
    "Minimum occurring character (excluding characters not appearing):",
    result.minChar,
    "(",
    result.minChar,
    "times)"
  );
  