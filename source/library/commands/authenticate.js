export default (token = ``) => {
  return `AUTHENTICATE${token.length > 0 ? ` ` : ``}${Buffer.from(token).toString(`hex`)}\r\n`
}
