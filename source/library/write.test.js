import write from './write'

test(`write`, () => {
  expect(typeof (write)).toBe(`function`)
  expect(typeof (write({ Commander: () => {}, state: {} }))).toBe(`function`)
})

test(`it returns expected output with no initial state`, () => {
  const state = {}
  const Commander = jest.fn(state => state)
  const sender = write({ Commander, state })

  expect(sender(`SIGNAL NEWNYM`)).toEqual({ queue: [ `SIGNAL NEWNYM` ] })
})

test(`it returns expected output with initial state`, () => {
  const state = { queue: [ `HEARTBEAT` ] }
  const Commander = jest.fn(state => state)
  const sender = write({ Commander, state })

  expect(sender(`SIGNAL NEWNYM`))
    .toEqual({ queue: [ `HEARTBEAT`, `SIGNAL NEWNYM` ] })
})

test(`it modifies the state the expected way`, () => {
  const Commander = jest.fn(state => ({
    state,
    write: write({ Commander, state })
  }))

  const currentState = Commander({}).write(`hello`).write(`there`).state

  expect(currentState).toEqual({ queue: [ `hello`, `there` ] })
})
