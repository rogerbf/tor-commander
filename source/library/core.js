const core = (config = {}) => {
  const { dependencies = [], state = {} } = config

  return Object.assign(
    () => core([ ...dependencies ], { ...state }),
    dependencies.reduce((methods, fn) => {
      return {
        ...methods,
        [fn.name]: (...args) => core([ ...dependencies ], fn(state, ...args))
      }
    }, {})
  )
}

export default core
