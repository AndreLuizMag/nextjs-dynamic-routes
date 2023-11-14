import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { ListPokemons } from '@/components/ListAllPkemons'

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.center}>
				<Image
					className={styles.logo}
					src='/next.svg'
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</div>

			<div className={styles.grid}>
				<ListPokemons />
			</div>

			<div className={styles.grid}>
				<Link
					href='/bulbasaur'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'>
					<h2>
						Bulbasaur <span>-&gt;</span>
					</h2>
				</Link>

				<Link
					href='/charmander'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'>
					<h2>
						Charmander <span>-&gt;</span>
					</h2>
				</Link>
			</div>
		</main>
	)
}
