// https://gitweb.torproject.org/torspec.git/tree/control-spec.txt

import AUTHENTICATE from './authenticate'
import SIGNAL from './signal'
import ADD_ONION from './add_onion'
import DEL_ONION from './del_onion'
import QUIT from './quit'

export default {
  AUTHENTICATE,
  SIGNAL,
  ADD_ONION,
  DEL_ONION,
  QUIT
}
