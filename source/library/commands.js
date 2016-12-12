// https://gitweb.torproject.org/torspec.git/tree/control-spec.txt

import AUTHENTICATE from './commands/authenticate'
import SIGNAL from './commands/signal'
import ADD_ONION from './commands/add_onion'
import DEL_ONION from './commands/del_onion'
import QUIT from './commands/quit'

export default {
  AUTHENTICATE,
  SIGNAL,
  ADD_ONION,
  DEL_ONION,
  QUIT
}
