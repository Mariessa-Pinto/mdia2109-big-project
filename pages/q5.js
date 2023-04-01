import styles from '@/styles/Q5.module.css'
import BackButton from '@/components/BackButton'

export default function Q5() {
    return (
        <>
        <div className={styles.main}>
            <div className={styles.titleSection}>
                <h1>Demographic Questionnaire</h1>

                <p>5/5</p>
            </div>
            <div className={styles.questionSection}>
                <h2 className={styles.question}>What region are you from?</h2>
                <div className={styles.answerBox}>
                    <button className={styles.answerButton}></button>
                </div>
                <BackButton/>
            </div>
        </div>
        </>
    )
}