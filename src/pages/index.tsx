import type { NextPage } from 'next'
import Seo from '../components/Seo/Seo'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
	return (
		<>
		  <Seo
			  title="Main Page"
				description="This is the main page!"
			/>
			<h1>Hi!</h1>
		</>
	)
}

export default Home
