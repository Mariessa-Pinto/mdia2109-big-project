import styles from './ResourceCard.module.css'
import Image from 'next/image'

export default function ResourceCard({
    title="",
    resource="",
    location="",
    contact="",
    img=""
}) {
    return (
        <>
        <div className={styles.resourceCard}>
            <div className={styles.leftSide}>
                <h2 className={styles.header}>{title}</h2>
                <p className={styles.resource}>Resources Available: {resource}</p>
                <p className={styles.location}>Location: {location}</p>
                <p className={styles.text}>Contact: {contact}</p>
            </div>
            <div className={styles.rightSide}>
                <Image
                    className={styles.image}
                    src={img}
                    alt={'image of resource'}
                    width={125}
                    height={120}
                />
            </div>

        </div>
        </>
    )
}