import type React from 'react'
import Head from 'next/head'

const Seo: React.FC<{
	siteName?: string
	title?: string
	description?: string
	image?: string
  bigImage?: boolean,
	color?: string
}> = ({
	siteName = 'Wyvern',
	title = 'Wyvern Client',
	description = '',
	image = 'https://wyvern.tk/icon.png',
  bigImage = false,
	color = '#3cb9ba',
}) => {
	return (
		<Head>
			<title>
				{title} | {siteName}
			</title>
			<meta content={siteName} property="og:site_name" />
			<meta content={title} property="og:title" />
			<meta content={description} property="og:description" />
			<meta content={image} property="og:image" />
      {bigImage ? <meta name="twitter:card" content="summary_large_image"/> : ''}
			<meta content={color} name="theme-color" />
      <link type="application/json+oembed" href="/oembed.json" />
		</Head>
	)
}

export default Seo
