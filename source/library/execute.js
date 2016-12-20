import socketExec from 'socket-exec'

const defaultDependencies = {
  socketExec
}

export default ({ dependencies = defaultDependencies, state }) => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}
