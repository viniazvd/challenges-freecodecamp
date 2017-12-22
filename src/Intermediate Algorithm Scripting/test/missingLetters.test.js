const fearNotLetter = require('../challenges/missingLetters')

describe('fearNotLetter', () => {
  it('test1', () => {
    expect(fearNotLetter('abce')).toEqual('d')
  })

  it('test2', () => {
    expect(fearNotLetter('abcdefghjklmno')).toEqual('i')
  })

  it('test3', () => {
    expect(fearNotLetter('bcd')).toEqual(undefined)
  })

  it('test4', () => {
    expect(fearNotLetter('yz')).toEqual(undefined)
  })
})
