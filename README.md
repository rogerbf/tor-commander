# tor-commander

Promise-based Tor controller.

## usage

```javascript
import { commander, commands } from 'tor-commander'

const controlPort = commander(9055) // port is required

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

```
{
  port,
  hashedControlPassword
}
```

A port is required.

### `.send(commandString)`

Queue up a command to be written to the control port.

### `.execute()`

Returns a promise. Opens a connection to the Tor control port and writes from the queue. Resolves on positive completion reply, rejects for all other types of replies or if the connection fails in any way.
