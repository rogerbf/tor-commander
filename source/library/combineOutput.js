// example input
// [
//   { status: 250, message: `ControlPort=9055`, data: { ControlPort: 9055 } },
//   { status: 250, message: `ControlPort=9056`, data: { ControlPort: 9056 } }
// ]

export default (parsedOutput = []) =>
  parsedOutput
  .reduce((combined, fragment) => ({
    ...combined,
    success: combined.success && fragment.status === 250,
    data: {
      ...combined.data,
      ...Object.keys(fragment.data).reduce(
        (acc, key) => ({
          ...acc,
          [key]: (
            combined.data.hasOwnProperty(key)
            ? [
              ...Array.isArray(combined.data[key])
              ? combined.data[key]
              : [ combined.data[key] ], fragment.data[key]
            ]
            : fragment.data[key]
          )
        }), {}
      )
    }
  }), { success: true, data: {} })
