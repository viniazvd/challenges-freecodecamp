const uniteUnique = (...array) => {
  return [...array]
    .reduce((acc, cur) => acc.concat(cur))
    .reduce((acc, cur, index, array) => {
      if (acc.indexOf(cur) < 0) acc = acc.concat([cur])

      return acc
    }, [])
}

module.exports = uniteUnique
