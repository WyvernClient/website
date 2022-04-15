import type React from 'react'
import Head from 'next/head'

const Seo: React.FC<{
	siteName?: string
	title?: string
	homePage?: string
	description?: string
	longDescription?: string
	creator?: string
	icon?: string
	image?: string
	bigImage?: boolean
	color?: string
	contact?: string
	license?: string
	licenseUrl?: string
	twitterUsername?: string
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
	contact = 'https://discord.com/invite/aZSrxwNUFD',
	license = 'MIT',
	licenseUrl = 'https://github.com/DarkGuy10/BotClient/blob/main/LICENSE',
	twitterUsername = '',
}) => {
	return (
		<Head>
			<title>
				{title} | {siteName}
			</title>
			<meta content={siteName} name="application-name" />
			<meta content={homePage} name="application-url" />
			<meta content={contact} name="contact" />
			{/* <meta content={title} property="og:title" /> */}
			<meta content={description} name="description" />
			<meta content={longDescription} property="og:description" />
			<meta content={creator} name="creator" />
			<meta content={image} property="og:image" />
			<meta content={color} name="theme-color" />
			<meta content={license} name="license" />
			<meta content={licenseUrl} name="license:uri" />
			<meta content={bigImage ? 'summary_large_image' : 'summary'} name="twitter:card" />
			<meta content={twitterUsername} name="twitter:creator" />
			<meta content={twitterUsername} name="twitter:site" />
			<meta content={longDescription} name="twitter:description" />
			<meta content={image} name="twitter:image" />
			<link href={contact} rel="author" />
			<link href={icon} rel="icon" />
			<link href={licenseUrl} rel="licese" />
			<link type="application/json+oembed" href="/oembed.json" />
		</Head>
	)
}

export default Seo
