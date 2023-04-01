import Image from "next/image"
import styles from './BackButton.module.css'

export default function BackButton() {
    return (
        <>
            <div className={styles.backButton}>
                    <Image
                        src={''}
                        alt={''}
                        width={50}
                        height={50}
                    />
                    <p>Back</p>
                </div>
        </>
    )
}