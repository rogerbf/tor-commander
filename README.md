# tor-commander

Promise-based Tor controller. Define actions that are to be run via the ControlPort.

## usage

```javascript
import { commander, commands } from 'tor-commander'

const controlPort = commander(9055)

controlPort
  .send(commands.AUTHENTICATE())
  .send(commands.ADD_ONION({ Port: 80 }))
  .send(commands.QUIT)
  .execute()
    .then(keys)
    .catch(error)
```
