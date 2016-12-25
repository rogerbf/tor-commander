import commander, { commands } from './index'

test(`commands is an object`, () => expect(typeof (commands)).toEqual(`object`))

test(`commands has the expected properties`, () => {
  expect(Object.keys(commands)).toEqual([
    `AUTHENTICATE`, `SIGNAL`, `ADD_ONION`, `DEL_ONION`, `QUIT`
  ])
})

test(`throws`, () => {
  expect(() => commander()).toThrowError(Error(`a port has to be defined`))
})

test(`returns a function`, () => {
  const instance = commander(9050)
  expect(typeof (instance)).toEqual(`object`)
  expect(Object.keys(instance)).toEqual([`write`, `execute`])
})
