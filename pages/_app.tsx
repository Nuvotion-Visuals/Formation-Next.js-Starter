import type { AppProps } from 'next/app'
import React from 'react'

import '@avsync.live/formation/dist/index.dark.css'

// fontawesome
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import * as far from '@fortawesome/free-regular-svg-icons'
import * as fas from '@fortawesome/free-solid-svg-icons'
library.add(
  // regular
  far.faHeart, far.faPaperPlane, far.faCheckSquare, far.faSquare,
  fas.faEnvelope,

  // solid
  fas.faInfoCircle, fas.faBars, fas.faHeart, fas.faPlus,
  fas.faEllipsisV, fas.faPaperPlane, fas.faCalendarAlt,
  fas.faArrowRight, fas.faArrowLeft, fas.faClock, fas.faSearch,
  fas.faSortAlphaUp, fas.faSortAlphaDown, fas.faFilter,
  fas.faChevronCircleRight, fas.faChevronCircleLeft, fas.faEnvelope,
  fas.faCheck, fas.faExclamationTriangle
)

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App