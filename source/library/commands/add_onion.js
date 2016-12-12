// https://gitweb.torproject.org/torspec.git/tree/control-spec.txt
// 3.27. ADD_ONION

// 80
// [ `22`, `90` ]
// [ 22, { virtPort: 80, target: 8080 } ]
// `80,192.168.1.1:8080`
// Port=80
// Port=80,192.168.1.1:8080
// Port=22 Port=80,8080
const parsePort = (acc, ports) => {
  return acc.concat(
    typeof (ports) === `object`
    ? ` Port=${ports.virtPort}`.concat(ports.target ? `,${ports.target}` : ``)
    : ` Port=${ports}`
  )
}

export default (configuration = {}) => {
  const {
    keyType = `NEW`,        // required
    keyBlob = `BEST`,       // required
    flags = [ `Detach` ],   // recommended*
    port,                   // required
    clientName,
    clientBlob
  } = (
    typeof (configuration) === `object`
    ? configuration
    : { port: configuration }
  )

  !port && (() => { throw Error(`missing argument: port`) })()

  return (
    `ADD_ONION`
      .concat(
        configuration.keyBlob
        ? (
          keyBlob.slice(0, 7) === `RSA1024`
          ? ` ${keyBlob}`
          : ` RSA1024:${keyBlob}`
        )
        : ` ${keyType}:${keyBlob}`
      )
      .concat(` Flags=${flags.join(`,`)}`)
      .concat(
        Array.isArray(port)
        ? port.reduce(parsePort, ``)
        : Array.of(port).reduce(parsePort, ``)
      )
      .concat(clientName ? ` ClientAuth=${clientName}` : ``)
      .concat((clientName && clientBlob) ? `:${clientBlob}` : ``)
      .trim()
      .concat(`\r\n`)
  )
}

// *without "Detach", the hidden service will go down when
// the control connection closes
