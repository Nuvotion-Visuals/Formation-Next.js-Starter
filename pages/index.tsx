import type { NextPage } from 'next'
import Head from 'next/head'

import {
  Navigation
} from '@avsync.live/formation'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Formation Next Example</title>
        <meta name="description" content="This Next.js app was made using Formation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation
        navLogoSrc={'https://avsync-live.github.io/formation/static/media/logo-white.ec140047.svg'}
        navs={[
          {
            type: 'nav',
            name: 'Home',
            icon: 'info-circle',
            href: '/'
          },
          {
            type: 'nav',
            name: 'Scenes',
            icon: 'info-circle',
            href: '/scenes',
            toolTipTitle: 'Browse scenes to build your playlist'
          },
          {
            type: 'clickNav',
            name: 'Deck',
            toolTipTitle: 'Perform live music visuals with the scenes in your playlist',
            icon: 'info-circle',
            href: '/app',
            active: false,
            onClick: ()=> {
            
            }
          },
          {
            type: 'nav',
            name: 'Mosh',
            icon: 'info-circle',
            href: '/mosh',
            toolTipTitle: 'Datamosh video files'
          },
          {
            type: 'spacer'
          },
          {
            type: 'title',
            title: 'Learn'
          },
          {
            type: 'nav',
            name: 'Tutorials',
            icon: 'info-circle',
            href: '/tutorials',
            toolTipTitle: 'Learn how to create, perform, and share live music visuals'
          },
          {
            type: 'nav',
            name: 'FAQ',
            icon: 'info-circle',
            href: '/faq',
            toolTipTitle: 'Get answers about AVsync.LIVE'
          },
          {
            type: 'nav',
            name: 'Contact Us',
            icon: 'info-circle',
            toolTipTitle: 'Contact us on Facebook Messenger, Instagram, or Discord',
            onClick: () => {
            }
          }
        ]}
      >
      </Navigation>
    </div>
  )
}

export default Home
