export default (hashedControlPassword = ``) => {
  return `AUTHENTICATE${hashedControlPassword.length > 0 ? ` ` : ``}${hashedControlPassword}\r\n`
}
