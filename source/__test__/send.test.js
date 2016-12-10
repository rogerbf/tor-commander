import send from '../library/send.js'

it(`is function`, () => expect(typeof (send)).toBe(`function`))

it(`returns expected output with no initial state`, () => {
  const state = {}

  const boundSend = (...args) => send({ state, args })

  expect(boundSend(`SIGNAL NEWNYM`))
    .toEqual({ queue: [ `SIGNAL NEWNYM` ] })
})

it(`returns expected output with initial state`, () => {
  const state = { queue: [ `HEARTBEAT` ] }

  const boundSend = (...args) => send({ state, args })

  expect(boundSend(`SIGNAL NEWNYM`))
    .toEqual({ queue: [ `HEARTBEAT`, `SIGNAL NEWNYM` ] })
})
