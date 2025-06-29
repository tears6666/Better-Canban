import { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import styles from './Header.module.scss'
export default function Header() {
	const [isTrue, setIsTrue] = useState(false)

	const handleTrue = () => {
		setIsTrue(!isTrue)
	}

	return (
		<header className={styles.header}>
			<h1 className={styles.header__logo}>Better Canban</h1>
			{isTrue ? (
				<FaSun className={styles.header__moon} onClick={handleTrue} />
			) : (
				<FaMoon className={styles.header__moon} onClick={handleTrue} />
			)}
		</header>
	)
}
