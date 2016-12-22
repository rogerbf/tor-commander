import send from './send'

test(`send`, () => {
  expect(typeof (send)).toBe(`function`)
  expect(typeof (send({ Commander: () => {}, state: {} }))).toBe(`function`)
})

test(`it returns expected output with no initial state`, () => {
  const state = {}
  const Commander = jest.fn(state => state)
  const sender = send({ Commander, state })

  expect(sender(`SIGNAL NEWNYM`)).toEqual({ queue: [ `SIGNAL NEWNYM` ] })
})

test(`it returns expected output with initial state`, () => {
  const state = { queue: [ `HEARTBEAT` ] }
  const Commander = jest.fn(state => state)
  const sender = send({ Commander, state })

  expect(sender(`SIGNAL NEWNYM`))
    .toEqual({ queue: [ `HEARTBEAT`, `SIGNAL NEWNYM` ] })
})

test(`it modifies the state the expected way`, () => {
  const Commander = jest.fn(state => ({
    state,
    send: send({ Commander, state })
  }))

  const currentState = Commander({}).send(`hello`).send(`there`).state

  expect(currentState).toEqual({ queue: [ `hello`, `there` ] })
})
