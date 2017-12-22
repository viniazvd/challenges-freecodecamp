const diffArray = (array1, array2) => {
  const biggest = (x, y) => x.length > y.length ? x : y
  const smallest = (x, y) => x.length < y.length ? x : y

  return biggest(array1, array2).reduce((acc, cur) => {
    let find = smallest(array1, array2).find(x => x === cur)
    if (!find) acc.push(cur)

    return acc
  }, [])
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
