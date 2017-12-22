const fearNotLetter = str => {
  return [...str]
    .map((el, i) => el.charCodeAt())
    .reduce((acc, cur, index, array) => {
      if (array[index + 1] - cur > 1) {
        acc = String.fromCharCode(cur + 1)
      }

      return !acc ? undefined : acc
    }, undefined)
}

module.exports = fearNotLetter
