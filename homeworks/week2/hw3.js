function reverse(str) {
  let reverseStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
  }
  console.log(reverseStr)
}

reverse('hello');