import Image from "next/image"
import styles from './BackButton.module.css'

export default function BackButton() {
    return (
        <>
            <div className={styles.backButton}>
                    <Image
                        src={'/icons/backArrow.svg'}
                        alt={'back arrow'}
                        width={30}
                        height={30}
                    />
                    <p>Back</p>
                </div>
        </>
    )
}