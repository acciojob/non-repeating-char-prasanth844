function firstNonRepeatedChar(str) {
    if (!str) return null;

    const freq = {};

    // Step 1: Count frequency
    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Step 2: Find first non-repeating character
    for (let ch of str) {
        if (freq[ch] === 1) {
            return ch;
        }
    }

    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
