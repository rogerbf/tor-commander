export default ({ Commander, state }) => args => Commander({
  ...state,
  queue: state.queue ? [ ...state.queue, args ] : [ args ]
})
