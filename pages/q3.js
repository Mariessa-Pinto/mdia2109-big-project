import styles from '@/styles/Q3.module.css'
import BackButton from '@/components/BackButton'

export default function Q3() {
    return (
        <>
        <div className={styles.main}>
            <div className={styles.titleSection}>
                <h1>Demographic Questionnaire</h1>

                <p>3/5</p>
            </div>
            <div className={styles.questionSection}>
                <h2 className={styles.question}>What province do you reside in?</h2>
                <div className={styles.answerBox}>
                    <button className={styles.answerButton}></button>
                </div>
                <BackButton/>
            </div>
        </div>
        </>
    )
}