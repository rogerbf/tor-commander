import socketExec from 'socket-exec'
import parseOutput from './parseOutput'
import combineOutput from './combineOutput'

const defaultDependencies = {
  socketExec
}

export default ({ dependencies = defaultDependencies, state }) => () => {
  const controlPort = dependencies.socketExec({ port: state.port })
  return new Promise((resolve, reject) => {
    controlPort(state.queue)
      .then(output => parseOutput(output.toString()))
      .then(combineOutput)
      .then(output => output.success ? resolve(output.data) : reject(`Something went wrong`))
      .catch(error => reject(error))
  })
}
