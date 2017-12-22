const convertToRoman = require('../challenges/romanNumeralConverter')

const array = [
  { I: 1 },
  { II: 2 },
  { III: 3 },
  { IV: 4 },
  { V: 5 },
  { VI: 6 },
  { VII: 7 },
  { VIII: 8 },
  { IX: 9 },
  { X: 10 },
  { XI: 11 },
  { XII: 12 },
  { XIII: 13 },
  { XIV: 14 },
  { XV: 15 },
  { XVI: 16 },
  { XVII: 17 },
  { XVIII: 18 },
  { XIX: 19 },
  { XX: 20 },
  { XXI: 21 },
  { XXII: 22 },
  { XXIII: 23 },
  { XXIV: 24 },
  { XXV: 25 },
  { XXVI: 26 },
  { XXVII: 27 },
  { XXVIII: 28 },
  { XXIX: 29 },
  { XXX: 30 }
]

describe('convertToRoman', () => {
  it('test1', () => {
    expect(convertToRoman(array, 10)).toEqual('X')
  })

  it('test2', () => {
    expect(convertToRoman(array, 2)).toEqual('II')
  })

  it('test3', () => {
    expect(convertToRoman(array, 19)).toEqual('XIX')
  })

  it('test4', () => {
    expect(convertToRoman(array, 27)).toEqual('XXVII')
  })
})
