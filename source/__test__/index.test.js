import commander from '../index.js'

it(`exports a function`, () => expect(typeof (commander)).toBe(`function`))

it(`throws`, () => {
  expect(() => commander()).toThrowError(Error(`a port has to be defined`))
})

it(`returns a function`, () => {
  expect(typeof (commander(9050))).toEqual(`function`)
})

it(`returned function is a core with the expected state`, () => {
  const instance = commander(9050)
  expect(instance().getCurrentState()).toEqual({ port: 9050 })
})
