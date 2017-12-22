const convertToRoman = (array, num) =>
  array.reduce((acc, cur, index, array) => {
    const key = Object.keys(cur)[0]
    const value = Object.values(cur)[0]
    if (value === num) acc = key

    return acc
  }, '')

module.exports = convertToRoman
