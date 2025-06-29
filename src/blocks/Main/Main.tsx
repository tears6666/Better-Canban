import { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useTodoStore } from '../../store/store'
import styles from './Main.module.scss'

export default function Main() {
	// useState constants
	const [isActive, setIsActive] = useState(false)
	const [isNewSection, setIsNewSection] = useState(false)

	const handleCLick = () => {
		setIsActive(!isActive)
		setIsNewSection(!isNewSection)
	}
	// dispatch from store hook
	const fetch = useTodoStore(state => state.fetchTodos)
	const todos = useTodoStore(state => state.todos)
	useEffect(() => {
		try {
			fetch()
		} catch (error) {
			console.log('Fatal error', error)
		}
	}, [fetch])

	return (
		<main className={styles.main}>
			{isNewSection ? (
				<div className={styles.main__todos}>
					{todos.map(todo => (
						<h2 className={styles.todo__title}>{todo.title}</h2>
					))}
				</div>
			) : (
				<div
					onClick={handleCLick}
					className={isActive ? styles.add__active : styles.main__add}
				>
					<FiPlus className={styles.add__plus} />
				</div>
			)}
		</main>
	)
}
