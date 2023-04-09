import styles from '@/styles/Q1.module.css'
import BackButton from '@/components/BackButton'
import { useState } from 'react'
import Link from 'next/link';

export default function Q1() {

    const [clicked, setClicked] = useState(false);

    const [uClicked, setUClicked] = useState(false);
    const underClassName = uClicked ? `${styles["answerButtonActive"]} ${styles.answerButton}` : styles.answerButton;
    const [nClicked, setNClicked] = useState(false);
    const nineteenClassName = nClicked ? `${styles["answerButtonActive"]} ${styles.answerButton}` : styles.answerButton;
    const [tClicked, setTClicked] = useState(false);
    const twentyClassName = tClicked ? `${styles["answerButtonActive"]} ${styles.answerButton}` : styles.answerButton;
    const [fClicked, setFClicked] = useState(false);
    const fortyClassName = fClicked ? `${styles["answerButtonActive"]} ${styles.answerButton}` : styles.answerButton;


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
                    <button onClick={() => {setClicked(!clicked); setUClicked(!uClicked)}} className={underClassName}>18 and under</button>
                    <button onClick={() => {setClicked(!clicked); setNClicked(!nClicked)}} className={nineteenClassName}>19-25</button>
                    <button onClick={() => {setClicked(!clicked); setTClicked(!tClicked)}} className={twentyClassName}>26-39</button>
                    <button onClick={() => {setClicked(!clicked); setFClicked(!fClicked)}} className={fortyClassName}>40+</button>
            </div>
            <div className={styles.controls}>
                <Link href={''}><BackButton/></Link>
                {
                    clicked ? <><Link href={'./q2'}><button className={styles.nextButton}>Next</button></Link></> : <></>
                }
            </div>
        </div>
        </>
    )
}