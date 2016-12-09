import throwError from '../library/throwError'

it(`is a function`, () => expect(typeof (throwError)).toEqual(`function`))

it(`throws with error`, () => {
  expect(() => throwError(Error(`an error`))).toThrowError(`an error`)
})
