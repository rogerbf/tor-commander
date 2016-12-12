import ADD_ONION from '../library/commands/add_onion.js'

it(`is a function`, () => expect(typeof (ADD_ONION)).toEqual(`function`))

it(`throws without port`, () => {
  expect(() => ADD_ONION()).toThrowError(`missing argument: port`)
})

it(`returns the expected output`, () => {
  expect(ADD_ONION(80))
    .toEqual(`ADD_ONION NEW:BEST Flags=Detach Port=80\r\n`)

  expect(ADD_ONION(`80,3000`))
    .toEqual(`ADD_ONION NEW:BEST Flags=Detach Port=80,3000\r\n`)

  expect(ADD_ONION({ port: 80 }))
    .toEqual(`ADD_ONION NEW:BEST Flags=Detach Port=80\r\n`)

  expect(ADD_ONION({ port: [ 80, 8080 ] }))
    .toEqual(`ADD_ONION NEW:BEST Flags=Detach Port=80 Port=8080\r\n`)

  expect(ADD_ONION({ port: [ { virtPort: 80 }, { virtPort: 22, target: 23 } ] }))
    .toEqual(`ADD_ONION NEW:BEST Flags=Detach Port=80 Port=22,23\r\n`)

  expect(ADD_ONION({ port: [ 80, { virtPort: 22, target: 23 } ] }))
    .toEqual(`ADD_ONION NEW:BEST Flags=Detach Port=80 Port=22,23\r\n`)

  expect(ADD_ONION({ port: `80,192.168.1.1:8080` }))
    .toEqual(`ADD_ONION NEW:BEST Flags=Detach Port=80,192.168.1.1:8080\r\n`)

  expect(ADD_ONION(
    { keyBlob: `RSA1024:ABLOB`, port: { virtPort: 22, target: 23 }, clientName: `goai` }
  )).toEqual(`ADD_ONION RSA1024:ABLOB Flags=Detach Port=22,23 ClientAuth=goai\r\n`)

  expect(ADD_ONION(
    { keyBlob: `ABLOB`, port: { virtPort: 22, target: 23 } }
  )).toEqual(`ADD_ONION RSA1024:ABLOB Flags=Detach Port=22,23\r\n`)

  expect(ADD_ONION(
    { port: { virtPort: 80, target: 3000 }, clientBlob: `goai` }
  )).toEqual(`ADD_ONION NEW:BEST Flags=Detach Port=80,3000\r\n`)

  expect(ADD_ONION(
    { port: { virtPort: 80, target: 3000 }, clientName: `goai`, clientBlob: `globally` }
  )).toEqual(
    `ADD_ONION NEW:BEST Flags=Detach Port=80,3000 ClientAuth=goai:globally\r\n`
  )
})
