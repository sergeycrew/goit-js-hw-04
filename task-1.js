
const addIndex = (element, index) => element + index;

const subIndex = (element, index) => element - index;
  
function mapArray(array, cb) {
  
// Write code under this line
  const numbers = new Array(array.lenght);

  for(let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
     numbers[i] = cb(element, index);
  }
  return numbers;
}

const arr  = [1,2,3,4,5];

console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]

console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]