console.log('Hello, World!')
const arr = [1, 2, 3, 4, 5];

console.log("Length: " + arr.length);

arr.forEach(num => console.log(num));

let str = "";


for (let i = 0; i < arr.length; i++) {
  str += arr[i] + " ";
}

arr.sort((a, b) => b - a);



console.log("Sorted Array: " + arr.join(", "));

console.log("Concatenated String: " + str.trim());