const diffArray = require('../challenges/diffTwoArrays')

describe('diffArray', () => {
  it('test1', () => {
    expect(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4])).toEqual([ 'piglet', 4 ])
  })

  it('test2', () => {
    expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4])
  })

  it('test3', () => {
    expect(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo'])).toEqual(['snuffleupagus', 'cookie monster', 'elmo'])
  })

  it('test4', () => {
    expect(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly'])).toEqual([1, 'calf', 3, 'piglet', 7, 'filly'])
  })
})
