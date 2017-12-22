const empty = require('./empty')

const len = (array) => {
  if (empty(array)) return 0

  return array.reduce((acc, cur, index) => {
    acc = index

    return acc + 1
  })
}

module.exports = len
