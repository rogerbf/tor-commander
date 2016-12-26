# tor-commander

Manage Tor over the control port. Defer a series of `write()` operations that can then be `execute()`:ed to get a Promise that resolves when the connection is closed and all operations have been written to the control port with a positive completion reply.

## usage

```javascript
import { commander, commands } from 'tor-commander'

const controlPort = commander(9055)

controlPort
  .write(commands.AUTHENTICATE())
  .write(commands.ADD_ONION({ Port: 80 }))
  .write(commands.QUIT)
  .execute()
    .then(data)
    .catch(error)
```

## api

### `torCommander(port)`

Expects a number or an object with the property `port`.

### `.write(commandString)`

Defer a command to be written to the control port once connected.

### `.execute()`

Returns a Promise. Opens a connection to the Tor control port and writes from the write queue. Resolves on positive completion reply, rejects for all other types of replies or if the connection fails in any way.

## commands

To simplify command construction there are a few helpers available on the exported `commands` object.

### api

#### `.AUTHENTICATE([token])`

Returns the correct authentication string depending on whether `token` is supplied or not. Where token is the plaintext password.

#### `.ADD_ONION(options)`

Available options:

```javascript
{
  keyType, // default: NEW
  keyBlob, // default: BEST
  flags, // default: [ 'Detach' ]
  port, // Required
  clientName,
  clientBlob
}
```

#### `.DEL_ONION(serviceId)`

Takes a ServiceID (the onion address excluding .onion), note that this does not disconnect currently connected clients.

#### `.SIGNAL.RELOAD`

Reload config.

#### `.SIGNAL.SHUTDOWN`

Controlled shutdown.

#### `.SIGNAL.DUMP`

Dump statistics.

#### `.SIGNAL.DEBUG`

Switches all open logs to the debug log level.

#### `.SIGNAL.HALT`

Immediate shutdown.

#### `.SIGNAL.CLEARDNSCACHE`

Clear cached IPs for all hostnames.

#### `.SIGNAL.NEWNYM`

Switch to clean circuits.

#### `.SIGNAL.HEARTBEAT`

Unscheduled heartbeat message.

#### `.QUIT`

Close the control port connection.
