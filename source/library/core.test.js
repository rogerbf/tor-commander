import core from './core.js'

it(`exports a function`, () => expect(typeof (core)).toEqual(`function`))

it(`returns a function`, () => expect(typeof (core())).toEqual(`function`))

it(`returns a core with the expected state`, () => {
  const instance = core({ state: { port: 9050 } })
  expect(instance().getCurrentState()).toEqual({ port: 9050 })
})

it(`initializes with supplied dependencies`, () => {
  const beeper = ({ state }) => ({
    ...state,
    beeped: state.beeped ? !state.beeped : true
  })

  const newCore = core({ dependencies: [ beeper ], state: { port: 9050 } })
  expect(newCore.hasOwnProperty(`beeper`)).toBeTruthy()

  const beepedCore = newCore.beeper()
  expect(beepedCore.hasOwnProperty(`beeper`)).toBeTruthy()
  expect(beepedCore().getCurrentState())
    .toEqual({ port: 9050, beeped: true })

  const beepedCoreAgain = beepedCore.beeper()
  expect(beepedCoreAgain().getCurrentState())
    .toEqual({ port: 9050, beeped: false })
})
