const sumAll = array => {
  const min = Math.min(...array)
  const max = Math.max(...array)

  const range = (min, max) =>
    [...Array(max - min + 1)]
      .map((value, index) => min + index)
      .reduce((acc, cur) => acc + cur)

  return range(min, max)
}

module.exports = sumAll
