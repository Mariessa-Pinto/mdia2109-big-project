import Image from "next/image"
import styles from './quizbutton.module.css'
import Link from "next/link"

export default function QuizButton() {
    return (
        <div>
         <Link href="q1"> <button className={styles.button}>Take The Quiz!</button></Link> 
          
        </div>
    )
}