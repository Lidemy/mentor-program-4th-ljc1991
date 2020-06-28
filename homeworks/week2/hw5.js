function join(arr, concatStr) {
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      result += arr[i]
      result += concatStr
    } else {
      result += arr[i]
    }
  }
  return result
}

function repeat(str, times) {
  let result = ''
  for (let i = 0; i < times; i++) {
    result += str
  }
  return result
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));