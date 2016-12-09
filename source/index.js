import core from './library/core'

export default (configuration = {}) => {
  const { port = undefined, hashedControlPassword = undefined } = (
    typeof (configuration) === `number`
    ? { port: configuration }
    : configuration
  )

  port === undefined && (() => { throw Error(`a port has to be defined`) })()

  return core({ state: { port, hashedControlPassword } })
}
