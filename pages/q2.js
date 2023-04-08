import styles from '@/styles/Q2.module.css'
import BackButton from '@/components/BackButton'
import { useState } from 'react';
import Link from 'next/link';

export default function Q2() {

    const [clicked, setClicked] = useState(false);

    return (
        <>
        <div className={styles.main}>
            <div className={styles.titleSection}>
                <h1 className={styles.header}>Getting to know you</h1>
                <div className={styles.progressBar}>
                    <div className={styles.progress}></div>
                </div>
                <div className={styles.questionNumber}>
                    <p>2/5</p>
                </div>
            </div>
            <div className={styles.questionSection}>
                <h2 className={styles.question}>What is your gender?</h2>
                    <button className={styles.answerButton}>Female</button>
                    <button className={styles.answerButton}>Male</button>
                    <button className={styles.answerButton}>Other</button>
                    <button className={styles.answerButton}>Prefer to not answer</button>
            </div>
            <Link href={'./q1'}><BackButton/></Link>
        </div>
        </>
    )
}