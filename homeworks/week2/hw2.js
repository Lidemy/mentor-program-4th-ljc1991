function capitalize(str) {
  if (str[0] >= 'a' && str[0] <= 'z') {
    let result = ''
    result = str[0].toUpperCase()

    for (let i = 1; i < str.length; i++) {
      result += str[i]
    }
    return result
  } else {
    return str
  }
}

console.log(capitalize('hello'));