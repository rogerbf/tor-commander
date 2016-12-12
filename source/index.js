import core from './library/core'
import send from './library/send'
import commands from './library/commands'

export default (configuration = {}) => {
  const { port = undefined, hashedControlPassword = undefined } = (
    typeof (configuration) === `number`
    ? { port: configuration }
    : configuration
  )

  typeof (port) !== `number` &&
  (() => { throw Error(`a port has to be defined`) })()

  return core({
    dependencies: [ send ],
    state: { port, hashedControlPassword }
  })
}

export { commands }
