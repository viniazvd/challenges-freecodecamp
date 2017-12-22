const whatIsInAName = require('../challenges/whereforeArtThou')

describe('whatIsInAName', () => {
  it('test1', () => {
    expect(whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' })).toEqual([{ first: 'Tybalt', last: 'Capulet' }])
  })

  it('test2', () => {
    expect(whatIsInAName([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 })).toEqual([{ 'a': 1, 'b': 2 }, { 'a': 1, 'b': 2, 'c': 2 }])
  })
})
