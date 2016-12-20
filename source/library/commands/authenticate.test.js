import AUTHENTICATE from './authenticate'

it(`is a function`, () => expect(typeof (AUTHENTICATE)).toEqual(`function`))

it(`returns the expected output`, () => {
  expect(AUTHENTICATE()).toEqual(`AUTHENTICATE\r\n`)
  expect(AUTHENTICATE(`16:835E7C063F5C3EE3607B4A6390D8875194752583E407A6BDDFAA25B532`))
    .toEqual(`AUTHENTICATE 16:835E7C063F5C3EE3607B4A6390D8875194752583E407A6BDDFAA25B532\r\n`)
})
