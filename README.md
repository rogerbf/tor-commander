# tor-commander

Promise-based Tor controller. Control a Tor instance via its Control Port.

## usage

```javascript
import { commander, commands } from 'tor-commander'

const controlPort = commander(9055)

controlPort
  .send(commands.AUTHENTICATE())
  .send(commands.ADD_ONION({ Port: 80 }))
  .send(commands.QUIT) // close connection, promise resolves
  .execute() // returns a promise
    .then(keys)
    .catch(error)
```

## api

### `torCommander(port)`

Creates a commander bound to a specific port, expects a number.

### `torCommander(options)`

Available options are:

```javascript
{
  port,
  hashedControlPassword
}
```

A port is always required.

### `.send(commandString)`

Queue up a command to be written to the control port once connected.

### `.execute()`

Returns a Promise. Opens a connection to the Tor control port and writes from the queue. Resolves on positive completion reply, rejects for all other types of replies or if the connection fails in any way.

## commands

To simplify command construction there are a few helpers available on the exported `commands` object.

### api

#### `.AUTHENTICATE()`

Returns the correct output depending on wether `hashedControlPassword` is supplied or not.

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
