import commander, { commands } from './index'

test(`commander is a function`, () => expect(typeof (commander)).toBe(`function`))

test(`commands is an object`, () => expect(typeof (commands)).toEqual(`object`))

test(`commands has the expected properties`, () => {
  expect(commands.hasOwnProperty(`AUTHENTICATE`)).toBeTruthy()
  expect(commands.hasOwnProperty(`SIGNAL`)).toBeTruthy()
  expect(commands.hasOwnProperty(`ADD_ONION`)).toBeTruthy()
  expect(commands.hasOwnProperty(`DEL_ONION`)).toBeTruthy()
  expect(commands.hasOwnProperty(`QUIT`)).toBeTruthy()
})

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

it(`send commands to queue`, () => {
  const signal = `SIGNAL NEWNYM`
  const core = commander(9050)
  expect(core.hasOwnProperty(`send`)).toBeTruthy()
  const signalSent = core.send(signal)
  expect(signalSent().getCurrentState())
    .toEqual({ port: 9050, queue: [ signal ] })
})
