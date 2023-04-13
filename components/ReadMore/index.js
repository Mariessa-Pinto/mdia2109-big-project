import Image from "next/image"
import styles from './readmore.module.css'

export default function ReadMore() {
    return (
        <div>
         <a className={styles.button} href="stories">Read More</a>
          
        </div>
    )
}