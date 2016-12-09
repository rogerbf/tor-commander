const core = (configuration = {}) => {
  const { dependencies = [], state = {} } = configuration

  return Object.assign(
    // () => core([ ...dependencies ], { ...state }),
    () => ({ getCurrentState: () => state }),
    dependencies.reduce((methods, fn) => {
      return {
        ...methods,
        [fn.name]: (...args) => core([ ...dependencies ], fn(state, ...args))
      }
    }, {})
  )
}

export default core
