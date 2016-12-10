const core = (configuration = {}) => {
  const { dependencies = [], state = {} } = configuration

  return Object.assign(
    () => ({ getCurrentState: () => state }),
    dependencies.reduce((methods, fn) => {
      return {
        ...methods,
        // [fn.name]: (...args) => core([ ...dependencies ], fn(state, ...args))
        [fn.name]: (...args) => core({
          dependencies: [ ...dependencies ],
          state: fn({ state, ...args })
        })
      }
    }, {})
  )
}

export default core
