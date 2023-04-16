import Image from "next/image"
import styles from './SkipButton.module.css'

export default function SkipButton() {
    return (
        <>
            <div className={styles.skipButton}>
                <p>Skip</p>
                <Image
                    src={'/icons/forwardArrow.svg'}
                    alt={'skip arrow'}
                    width={30}
                    height={30}
                />
            </div>
        </>
    )
}