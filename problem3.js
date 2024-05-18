
function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  
  let myArray = [3,2,1,4,5,8,6,9,7,10,12,14,11,13,15,18,17,16,20,19];
  let sortedArray = sortArrayAscending(myArray);
  
  console.log("Original array:", myArray);
  console.log("Sorted array:", sortedArray);
  