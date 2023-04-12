import type { NextPage } from 'next'
import Head from 'next/head'

import {
  Page, RichTextEditor, markdownToHTML
} from '@avsync.live/formation'
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [readme, setReadme] = useState('');

  useEffect(() => {
    async function fetchReadme() {
      const response = await fetch('https://raw.githubusercontent.com/AVsync-LIVE/Formation/main/README.md');
      const text = await response.text();
      setReadme(text);
    }
    fetchReadme();
  }, []);
  
  return (
    <div>
      <Head>
        <title>Formation Next Example</title>
        <meta name="description" content="This Next.js app was made using Formation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        {
          readme &&
            <RichTextEditor
              value={String(markdownToHTML(readme))}
              readOnly
            />
        }
     
      </Page>
    </div>
  )
}

export default Home
