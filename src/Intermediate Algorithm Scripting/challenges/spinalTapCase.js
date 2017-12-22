const spinalCase = (str) => {
  return [...str]
    .map(el => el.replace(/\s|_/g, '-'))
    .join('')
    .toLowerCase()
}

module.exports = spinalCase
