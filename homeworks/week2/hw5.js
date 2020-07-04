/* eslint-disable */
function join(arr, concatStr) {
  if (arr.length === 0) { // 經助教提醒後，補上 arr 為空陣列的處理。
    return ''
  }

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