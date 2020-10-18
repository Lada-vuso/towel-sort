
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr;
  if (matrix === undefined || matrix.length === 0) {
    arr = [];
  } else {
    arr = matrix[0];
    
    for (let i = 1; i < matrix.length; i +=2) {
      matrix[i] = matrix[i].reverse();
    }
    
    
    for (let i = 1; i < matrix.length; i++){
      arr = arr.concat(matrix[i]);
    }
  } return arr;
}
