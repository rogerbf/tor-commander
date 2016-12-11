// https://gitweb.torproject.org/torspec.git/tree/control-spec.txt
// TODO: 3.27. ADD_ONION
// TODO: 3.28. DEL_ONION
import AUTHENTICATE from './authenticate'
import SIGNAL from './signal'
import ADD_ONION from './add_onion'
import QUIT from './quit'

export default {
  AUTHENTICATE,
  SIGNAL,
  ADD_ONION,
  QUIT
}
