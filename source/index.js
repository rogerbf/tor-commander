import write from './library/write'
import execute from './library/execute'
import commands from './library/commands'

const commander = (configuration = {}) => {
  const { port = undefined } = (
    typeof (configuration) === `number`
    ? { port: configuration }
    : configuration
  )

  typeof (port) !== `number` &&
  (() => { throw Error(`a port has to be defined`) })()

  const Commander = state => ({
    write: write({ Commander, state }),
    execute: execute({ Commander, state })
  })

  return Commander({ port })
}

export { commands, commander }
export default commander
