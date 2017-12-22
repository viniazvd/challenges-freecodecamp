const spinalCase = require('../challenges/spinalTapCase')

describe('spinalCase', () => {
  it('test1', () => {
    expect(spinalCase('This Is Spinal Tap')).toEqual('this-is-spinal-tap')
  })
})
