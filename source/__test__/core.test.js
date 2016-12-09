import core from '../library/core.js'

it(`exports a function`, () => expect(typeof (core)).toEqual(`function`))

it(`returns a function`, () => expect(typeof (core())).toEqual(`function`))

it(`returns a core with the expected state`, () => {
  const instance = core({ state: { port: 9050 } })
  expect(instance().getCurrentState()).toEqual({ port: 9050 })
})
