const sumAll = array => {
  const min = Math.min(array[0], array[1])
  const max = Math.max(array[0], array[1])
  const range = (min, max) =>
    [...Array(max - min + 1)]
      .map((value, index) => min + index)
      .reduce((acc, cur) => acc + cur)

  return range(min, max)
}

module.exports = sumAll
