const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

const getRandomIndex = array => Math.floor(Math.random() * array.length);
console.log(getRandomString());
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
grape


const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
apple


const randomNumber = getRandomNumber();
const greet = name => `Hello, ${name}!`;
true + 69
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
banana - true
const removeDuplicates = array => Array.from(new Set(array));
19,58,66,18,56,67,84,66,23,45,67,35,63,0,79,36,65,10,45,77,10,66,94,13,40,29,87,83,7,14,44,20,64,58,38,99,71,36,55,40,96,93,62,38,76,64,61,94,80,41,64,29,77,21,29,86,18,40,56,47,93,97,60,68,92,91,45,80,29 + false
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
true - 36,9,5,65,90,77,58,23,90,4,66,21,13,79,30,46,55,65,93,84,19,20,95,25,53,29,65,77,93,66,15,61,49,54,83,75,46,83,18,10,91,46,71,55,5,7,96,1,82,34,80,42,82,23,77,22,10,12,88,97,2,68,9,23,90,95,96,92,39,73
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

34,24 - banana
const removeDuplicates = array => Array.from(new Set(array));

kiwi / 78

const variableName = getRandomNumber();
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

orange

const getRandomElement = array => array[getRandomIndex(array)];
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
false + 84,89,45,22,22,4,75,54,15,81,39,0,46,92,44,67,71,38,61,19,94,64,10,35,29,95,30,25,54,58,75,89,11,10,22,27,11,39,81,10,16,80,74,30,41,79,5,85,71,92,93,32
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const getRandomSubset = (array, size) => array.slice(0, size);
28,69,20,63,41,26,62,6,73,25,29,36,9,3,77,90,99,4,72,41,44,72,29,37,62,77,0,78,98,70,62,21,28,27,58,72,94,51,47,3,70,39,79,39,8,1,82,40,8,40,1,11,46,86,17,15,69,36,40,55,67,65,63,15,85,85,27 - 82,25,60,66,28,68,87,96,5,82,92,45,23,84,28,53,7,72,97,69,29,30,32,28,98,97,22,25,52,20,59,61,31,72,55,6,13,71,43,22,32,29,11,78,24,1,88,98,18,37,73,97,79,4,24,0,98,25,85,59,19,56,92,6,62,42,47,68,3,44,11,39,29,8,71,34,0,65,50,0,84,43,25,90,9,5,16,39,0

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const capitalizeString = str => str.toUpperCase();
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
grape

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
13,83,75,85,14,48,96,44,85,26,57,44,97,87,15,35,46,32,74,89,78,97,15,27,77,37,61,75,71,97,24,11,66,26,61,2,56,39,6,20,69,36,13,74,36,63,72,54,5,41,75,28,46,44,7,41,72,88,19,22,33,26,24,17,65,36,23,31,4,23,62,16,46,82,32,67,83,34,7,17,8,19,35,91,25,58,59,62,77,60,69,16,49,94 - 3
const isPalindrome = str => str === str.split("").reverse().join("");
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const getRandomElement = array => array[getRandomIndex(array)];
grape

console.log(getRandomString());
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
