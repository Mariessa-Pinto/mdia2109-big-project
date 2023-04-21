import styles from '@/styles/Q2.module.css'
import BackButton from '@/components/BackButton'
import SkipButton from '@/components/SkipButton'
import { useState } from 'react';
import Link from 'next/link';

export default function Q2() {

    const [clicked, setClicked] = useState(false);

    const [fClicked, setFClicked] = useState(false);
    const femaleClassName = fClicked ? `${styles["answerButtonActive"]} ${styles.answerButton}` : styles.answerButton;
    const [mClicked, setMClicked] = useState(false);
    const maleClassName = mClicked ? `${styles["answerButtonActive"]} ${styles.answerButton}` : styles.answerButton;
    const [oClicked, setOClicked] = useState(false);
    const otherClassName = oClicked ? `${styles["answerButtonActive"]} ${styles.answerButton}` : styles.answerButton;
    const [nClicked, setNClicked] = useState(false);
    const notClassName = nClicked ? `${styles["answerButtonActive"]} ${styles.answerButton}` : styles.answerButton;

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.titleSection}>
                    <div className={styles.skip}>
                        <Link href={'/landingpage'}><SkipButton/></Link>
                    </div>
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
                        <button onClick={() => {setClicked(!clicked); setFClicked(!fClicked)}} className={femaleClassName}>Female</button>
                        <button onClick={() => {setClicked(!clicked); setMClicked(!mClicked)}} className={maleClassName}>Male</button>
                        <button onClick={() => {setClicked(!clicked); setOClicked(!oClicked)}} className={otherClassName}>Other</button>
                        <button onClick={() => {setClicked(!clicked); setNClicked(!nClicked)}} className={notClassName}>Prefer to not answer</button>
                </div>
                <div className={styles.seperator}></div>
                <div className={styles.controls}>
                    <Link href={'./q1'}><BackButton/></Link>
                    {
                        clicked ? <><Link href={'./q3'}><button className={styles.nextButton}>Next</button></Link></> : <></>
                    }
                </div>
            </div>
        </div>
    )
}