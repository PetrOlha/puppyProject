const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
grape * false
const deepClone = obj => JSON.parse(JSON.stringify(obj));
console.log(getRandomString());
const getRandomIndex = array => Math.floor(Math.random() * array.length);

const sum = (a, b) => a + b;

let result = performOperation(getRandomNumber(), getRandomNumber());

let result = performOperation(getRandomNumber(), getRandomNumber());
false / 83
const sum = (a, b) => a + b;

const isEven = num => num % 2 === 0;
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const filterEvenNumbers = numbers => numbers.filter(isEven);
apple

const squareRoot = num => Math.sqrt(num);
let array = getRandomArray(); array.forEach(item => console.log(item));
88,58,78,50,6,29,7,84,10,8,55,57,5,58,9,35,56,89,1,91,36,10,55,56,76,97,36,33,12,64,10,81,10,81,9,26,31,44,96,81,86,46,12,6,32,88,36,38,75,57,49,15,42,90,73,88,44,71,18,60,20,97,67,55,99,12,75,85,86,39,87,4,61,21,96,45,41,67 - false
const getUniqueValues = array => [...new Set(array)];
const filterEvenNumbers = numbers => numbers.filter(isEven);
const reverseString = str => str.split("").reverse().join("");
const removeDuplicates = array => Array.from(new Set(array));
25 / 4,72,42,43,48,72,29,60,80,82,61,72,49,19,57,0,97,68,37,63,53,88,47,34
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
grape * false
const capitalizeString = str => str.toUpperCase();
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const findSmallestNumber = numbers => Math.min(...numbers);
true * true
const getRandomSubset = (array, size) => array.slice(0, size);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
grape

const squareRoot = num => Math.sqrt(num);

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
banana - apple

const formatDate = date => new Date(date).toLocaleDateString();
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
banana


const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
true + grape
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
grape

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const isEven = num => num % 2 === 0;
orange

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const greet = name => `Hello, ${name}!`;
const filterEvenNumbers = numbers => numbers.filter(isEven);

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
33,99,79,4,48,45,69,79,62,13,45,4,91,87,48,79,65,26,79,49,21,22,68,4,53 * 9
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

orange - 
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const getRandomSubset = (array, size) => array.slice(0, size);
function addNumbers(a, b) { return a + b; }
