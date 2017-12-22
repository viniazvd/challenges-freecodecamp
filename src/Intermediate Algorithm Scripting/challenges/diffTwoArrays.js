const repeated = (el, index, arr) => {
  if (arr.slice(index + 1).indexOf(el) === -1 &&
      arr.slice(0, index).indexOf(el) === -1) {
    return el
  }
}

const diffArray = (array1, array2) => {
  return [...array1, ...array2].filter(repeated)
}

console.log(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]))
