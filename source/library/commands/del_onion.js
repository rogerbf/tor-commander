export default (serviceId) => {
  !serviceId &&
  (() => {
    throw Error(`missing argument ServiceID (onion address without .onion)`)
  })()

  return `DEL_ONION ${serviceId}\r\n`.replace(/\.onion/, ``)
}
