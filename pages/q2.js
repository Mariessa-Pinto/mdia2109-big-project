import styles from '@/styles/Q2.module.css'
import BackButton from '@/components/BackButton'

export default function Q2() {
    return (
        <>
        <div className={styles.main}>
            <div className={styles.titleSection}>
                <h1>Demographic Questionnaire</h1>

                <p>2/5</p>
            </div>
            <div className={styles.questionSection}>
                <h2 className={styles.question}>What is your gender?</h2>
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