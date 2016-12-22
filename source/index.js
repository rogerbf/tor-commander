import send from './library/send'
import execute from './library/execute'
import commands from './library/commands'

export { commands }

export default (configuration = {}) => {
  const { port = undefined, hashedControlPassword = undefined } = (
    typeof (configuration) === `number`
    ? { port: configuration }
    : configuration
  )

  typeof (port) !== `number` &&
  (() => { throw Error(`a port has to be defined`) })()

  const Commander = (state = {}) => ({
    send: send({ Commander, state }),
    execute: execute({ Commander, state })
  })

  return Commander({ port, hashedControlPassword })
}
