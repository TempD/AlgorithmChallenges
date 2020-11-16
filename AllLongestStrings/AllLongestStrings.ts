/**
 * Steps for algorithm:
 * 1. Necessary to determine longest length. Can you do this in place?
 * 2. Might be expensive to remove smaller values from original array. Better to populate a results array.
 * 3. Keep the order in place. That should be easy with a results array.
 */
function allLongestStrings(inputArray: string[]): string[] {
    let results: string[] = [];
    let longestLength = 0;

    for (const str of inputArray) {
        if (str.length > longestLength) {
            longestLength = str.length;
        }
    }

    for (const str of inputArray) {
        if (str.length === longestLength) {
            results.push(str);
        }
    }

    return results;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));