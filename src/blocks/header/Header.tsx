import { FaClipboardCheck } from "react-icons/fa";
import styles from './Header.module.scss';

export default function Header(){
  return(
    <header className={styles.header}>
      <h1 className={styles.header__logo}>Better Canban</h1>
      <FaClipboardCheck className={styles.header__item}/>
    </header>
  )
}