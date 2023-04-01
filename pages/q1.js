import styles from '@/styles/Q1.module.css'
import BackButton from '@/components/BackButton'

export default function Q1() {
    return (
        <>
        <div className={styles.main}>
            <div className={styles.titleSection}>
                <h1>Demographic Questionnaire</h1>

                <p>1/5</p>
            </div>
            <div className={styles.questionSection}>
                <h2 className={styles.question}>How old are you?</h2>
                <div className={styles.answerBox}>
                    <button className={styles.answerButton}></button>
                </div>
                <div className={styles.answerBox}>
                    <button className={styles.answerButton}></button>
                </div>
                <div className={styles.answerBox}>
                    <button className={styles.answerButton}></button>
                </div>
                <div className={styles.answerBox}>
                    <button className={styles.answerButton}></button>
                </div>
                <BackButton/>
            </div>
        </div>
        </>
    )
}