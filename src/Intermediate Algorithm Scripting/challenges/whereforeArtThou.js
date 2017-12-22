const whatIsInAName = (collection, source) => {
  const sourcekeys = Object.keys(source)

  return collection
    .filter(obj => sourcekeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]))
}

module.exports = whatIsInAName
