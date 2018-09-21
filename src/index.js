module.exports = function longestConsecutiveLength(array) {

  array = array.sort( (a,b) => {return a - b} );

  let max = 1,
      cur = 1;
  
  for (let i = 1; i < array.length; i++) {

    if (array[i] - array[i-1] == 1) {
      cur++;
    } else if (array[i] != array[i-1]) {
      max = cur > max ? cur : max;
      cur = 1;
    }
    
  }

  return array.length > 1 ? max : array.length;
  
}
