const maybeParseInt = str => parseInt(str, 10) || str

const destructureData = data => {
  const parsed = (
    [ data ]
    .map(data => data.indexOf(`=`))
    .filter(index => index !== -1)
    .map(index => ({
      [ data.slice(4, index) ]: maybeParseInt(data.slice(index + 1))
    }))
  )

  return (
    parsed.length > 0
    ? parsed.reduce((acc, kv) => ({ ...acc, ...kv }), {})
    : {}
  )
}

export default (output = ``) =>
  output
  .split(`\r\n`)
  .filter(line => line.length > 0)
  .map(line => ({
    status: parseInt(line.slice(0, 3), 10),
    message: line.slice(4).trim(),
    data: destructureData(line)
  }))
