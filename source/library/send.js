export default function send ({ state, args }) {
  return { ...state, queue: state.queue ? [ ...state.queue, ...args ] : args }
}
