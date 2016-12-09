import core from './library/core'
import throwError from './library/throwError'

export default (configuration = {}) => {
  const { port = undefined, hashedControlPassword = undefined } = (
    typeof (configuration) === `number`
    ? { port: configuration }
    : configuration
  )

  port === undefined && throwError(Error(`a port has to be defined`))

  return core({ state: { port, hashedControlPassword } })
}
