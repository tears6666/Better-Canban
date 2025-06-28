import { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import styles from './Main.module.scss';

export default function Main(){
  const [isActive, setIsActive] = useState(false)

  const handleCLick = () =>{
    setIsActive(!isActive)
  }
  return( 
    <main className={styles.main}>
      <div onClick={handleCLick} className={isActive ? styles.add__active : styles.main__add}>
        <FiPlus className={styles.add__plus}/>
      </div>
    </main>
  )
}