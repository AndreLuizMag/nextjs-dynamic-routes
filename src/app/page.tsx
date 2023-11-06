import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { ListAllCategories } from '@/components/ListAllCategories'

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
				<ListAllCategories />
			</div>

			<div className={styles.grid}>
				<Link
					href='/consignado'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'>
					<h2>
						Categoria - Consignado <span>-&gt;</span>
					</h2>
					<p>
						<b>id:</b> 10 | <b>path:</b> consignado
					</p>
				</Link>

				<Link
					href='/consignado'
					className={styles.card}
					target='_blank'
					rel='noopener noreferrer'>
					<h2>
						Produto - Consignado Federal <span>-&gt;</span>
					</h2>
					<p>
						<b>id:</b> 15 | <b>path:</b> consignado-federal
					</p>
				</Link>
			</div>
		</main>
	)
}
