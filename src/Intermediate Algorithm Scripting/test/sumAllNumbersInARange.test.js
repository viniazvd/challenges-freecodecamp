const sumAllNumbersInARange = require('../challenges/sumAllNumbersInARange')

describe('sumAllNumbersInARange', () => {
  it('test1', () => {
    expect(sumAllNumbersInARange([1, 4])).toEqual(10)
  })

  it('test2', () => {
    expect(sumAllNumbersInARange([4, 1])).toEqual(10)
  })

  it('test3', () => {
    expect(sumAllNumbersInARange([5, 10])).toEqual(45)
  })

  it('test4', () => {
    expect(sumAllNumbersInARange([10, 5])).toEqual(45)
  })
})
