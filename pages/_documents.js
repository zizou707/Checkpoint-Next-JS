import { Html, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet" />
      </header>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}