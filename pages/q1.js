import styles from '@/styles/Q1.module.css'
import BackButton from '@/components/BackButton'

export default function Q1() {
    return (
        <>
        <div className={styles.main}>
            <div className={styles.titleSection}>
                <h1 className={styles.header}>Getting to know you</h1>
                <div className={styles.progressBar}>
                    <div className={styles.progress}></div>
                </div>
                <div className={styles.questionNumber}>
                    <p>1/5</p>
                </div>
            </div>
            <div className={styles.questionSection}>
                <h2 className={styles.question}>How old are you?</h2>
                    <button className={styles.answerButton}>Under 18</button>
                    <button className={styles.answerButton}>19-25</button>
                    <button className={styles.answerButton}>26-40</button>
                    <button className={styles.answerButton}>40+</button>
            </div>
            <BackButton/>
        </div>
        </>
    )
}