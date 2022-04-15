import type React from 'react'
import Head from 'next/head'

const Seo: React.FC<{
	siteName?: string
	title?: string
	description?: string
	smallImg?: string
}> = ({ siteName = 'Wyvern', title = 'Wyvern Client', description = '', smallImg = 'https://wyvern.tk/icon.png' }) => {
	return (
		<Head>
			<title>
				{title} | {siteName}
			</title>
			<meta content={siteName} property="og:site_name" />
			<meta content={title} property="og:title" />
			<meta content={description} property="og:description" />
			<meta content={smallImg} property="og:image" />
		</Head>
	)
}

export default Seo
