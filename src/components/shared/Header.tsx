import React from 'react'
import Head from 'next/head'


const Header = ({children}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <title>{children.Seo.title}</title>
      <meta name="keywords" content={children.Seo.keywords.join(',')}></meta>
      <meta name="language" content="Spanish"/>
      <meta name="description" content={children.Seo.description} />
      <meta property="og:title" content={children.Seo.title}/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={children.Seo.image}/>
      <meta property="og:image:secure_url" content={children.Seo.image}/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta property="og:site_name" content="Nemiliz Diagnostics"/>
      <meta property="og:description" content={children.Seo.description}></meta>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="portada.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="portada.png"/>
    </Head>
  )
}

export default Header;