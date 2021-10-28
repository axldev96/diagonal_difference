function diagonalDifference(arr) {
  let diagonal1 = 0;
  let diagonal2 = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = arr[i].length - 1;
      diagonal1 += arr[i][i];
      diagonal2 += arr[i][count - i];
  }
  return Math.abs(diagonal1 - diagonal2);
}
console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));
