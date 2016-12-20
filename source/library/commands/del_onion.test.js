import DEL_ONION from './del_onion.js'

it(`exports a function`, () => expect(typeof (DEL_ONION)).toEqual(`function`))

it(`throws with no argument`, () => {
  expect(() => DEL_ONION())
    .toThrowError(`missing argument ServiceID (onion address without .onion)`)
})

it(`returns the expected output`, () => {
  expect(DEL_ONION(`f2kj4hfr3`)).toEqual(`DEL_ONION f2kj4hfr3\r\n`)
  expect(DEL_ONION(`f2kj4hfr3.onion`)).toEqual(`DEL_ONION f2kj4hfr3\r\n`)
})
