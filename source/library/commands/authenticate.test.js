import AUTHENTICATE from './authenticate'

it(`is a function`, () => expect(typeof (AUTHENTICATE)).toEqual(`function`))

it(`returns the expected output`, () => {
  expect(AUTHENTICATE()).toEqual(`AUTHENTICATE\r\n`)
  expect(AUTHENTICATE(`hello`))
    .toEqual(`AUTHENTICATE ${Buffer.from(`hello`).toString(`hex`)}\r\n`)
})
