/*
 * Implement a function that returns an array with the set of all unique values from the given array.
 * The order of values in the returned array should be consistent with the order in which values first
 * appeared in the input array.
 */
const removeDuplicates = (input) => {
  return input.filter((item, index) => input.indexOf(item) === index);
};

const input = ["John", "Mike", "Alice", "Jeff", "John", "Alex", "Susan"];

console.log(`Before: ${JSON.stringify(input)}`);
console.log(`After: ${JSON.stringify(removeDuplicates(input))}`);
