const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
