import socketExec from 'socket-exec'
import parseOutput from './parseOutput'
import combineOutput from './combineOutput'

const defaultDependencies = {
  socketExec
}

export default ({ dependencies = defaultDependencies, state }) => {
  const controlPort = dependencies.socketExec({ port: state.port })
  return (
    controlPort(state.queue)
      .then(parseOutput)
      .then(combineOutput)
      .then(output => output.success ? output.data : Promise.reject(output))
  )
}
