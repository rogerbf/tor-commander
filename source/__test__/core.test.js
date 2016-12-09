import core from '../library/core.js'

it(`is defined`, () => {
  expect(core).toBeDefined()
})

it(`returns a function`, () => {
  expect(typeof (core())).toEqual(`function`)
})
