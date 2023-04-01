import styles from '@/styles/Q4.module.css'
import BackButton from '@/components/BackButton'

export default function Q4() {
    return (
        <>
        <div className={styles.main}>
            <div className={styles.titleSection}>
                <h1>Demographic Questionnaire</h1>

                <p>4/5</p>
            </div>
            <div className={styles.questionSection}>
                <h2 className={styles.question}>How satisfied are you with your experience as a refugee in Canada?</h2>
                <div className={styles.answerBox}>
                    <button className={styles.answerButton}></button>
                </div>
                <BackButton/>
            </div>
        </div>
        </>
    )
}