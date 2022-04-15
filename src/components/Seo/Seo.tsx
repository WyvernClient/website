import type React from 'react'
import Head from 'next/head'

const Seo: React.FC<{
	siteName?: string
	title?: string
	description?: string
	image?: string
	bigImage?: boolean
	color?: string
}> = ({
	siteName = 'Wyvern',
	title = 'Wyvern Client',
	homePage = 'https://wyvern.tk',
	description = '',
	longDescription = description,
	creator = siteName,
	icon = 'https://wyvern.tk/icon.png',
	image = icon,
	bigImage = false,
	color = '#3cb9ba',
	contact = '',
	license = '',
	licenseUrl = '',
	twitterUsername = '',
}) => {
	return (
		<Head>
			<title>
				{title} | {siteName}
			</title>
			<meta content={siteName} name="application-name" />
			<meta contnet={homePage} name="application-url" />
			<meta content={contact} name="contact" />
			<meta content={title} property="og:title" />
			<meta content={description} name="description" />
			<meta content={longDescription} property="og:description" />
			<meta content={creator} name="creator" />
			<meta content={image} property="og:image" />
			{bigImage ? <meta name="twitter:card" content="summary_large_image" /> : ''}
			<meta content={color} name="theme-color" />
			<meta content={license} name="license" />
			<meta content={licenseUrl} name="license:uri" />
			<meta content="summary" name="twitter:card" />
			<meta content={twitterUsername} name="twitter:creator" />
			<meta content={twitterUsername} name="twitter:site" />
			<meta content={longDescription} name="twitter:description" />
			<meta content={image} name="twitter:image" />
			<link href={contact} rel="author" />
			<link href={icon} rel="icon" />
			<link href={licenseUrl} rel="licese" />
			<link href="/oembed.json" type="application/json+oembed" />
		</Head>
	)
}

export default Seo
