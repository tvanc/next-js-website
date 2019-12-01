import React, { useEffect } from 'react'
import Head from 'next/head'
import LineClamp from '@tvanc/lineclamp'

export default function Haiku () {
  const haiku = React.createRef()
  const lines = [
    'I am always three lines',
    'As large as possible',
    'An awful haiku',
  ]

  useEffect(() => {
    const clamp = new LineClamp(haiku.current, {
      useSoftClamp: true,
      maxLines: 3
    })

    clamp.apply().watch()
  })

  return (
    <div>
      <Head>
        <title>Line Clamp Haiku</title>
      </Head>

      <p className={'haiku'} ref={haiku}>{lines.join('\n')}</p>

      <style jsx global>{`
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }

      body {
        display: flex;
        align-items: center;
        justify-content: center;
        background: wheat;
      }
      `}</style>

      <style jsx>{`
      .haiku {
        font-family: 'Dancing Script';
        margin: 0;
        white-space: pre-wrap;
        font-size: 33.33vh;
        padding: 0 0.25em;
        /* line-height could be anything but I like 1 */
        line-height: 1;
      }

      /* latin */
      @font-face {
        font-family: 'Dancing Script';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/dancingscript/v13/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3Sup6hNX6plRP.woff) format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `}
      </style>
    </div>
  )
}
