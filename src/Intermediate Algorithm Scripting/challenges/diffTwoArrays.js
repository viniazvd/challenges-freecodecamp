const notRepeated = (x, y) => (x && !y) || (!x && y)

const diffArray = (array1, array2) => {
  return [...array1, ...array2]
    .filter(el => notRepeated(array1.includes(el), array2.includes(el)))
}

module.exports = diffArray
