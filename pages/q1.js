import styles from '@/styles/Q1.module.css'
import BackButton from '@/components/BackButton'
import SkipButton from '@/components/SkipButton'
import { useState } from 'react'
import Link from 'next/link';

export default function Q1() {
    const [age, setAge] = useState(null);

    const [clicked, setClicked] = useState(false);


    const [isage, setIsAge] = useState(null);
    const CheckAge = () => {
        console.log(age)

        if(age !== null) {
            localStorage.setItem('age', age);
            setIsAge(age);
        }
    };

    const [uClicked, setUClicked] = useState(false);
    const underClassName = uClicked ? `${styles["answerButtonActive"]} ${styles.answerButton}` : styles.answerButton;
    const [nClicked, setNClicked] = useState(false);
    const nineteenClassName = nClicked ? `${styles["answerButtonActive"]} ${styles.answerButton}` : styles.answerButton;
    const [tClicked, setTClicked] = useState(false);
    const twentyClassName = tClicked ? `${styles["answerButtonActive"]} ${styles.answerButton}` : styles.answerButton;
    const [fClicked, setFClicked] = useState(false);
    const fortyClassName = fClicked ? `${styles["answerButtonActive"]} ${styles.answerButton}` : styles.answerButton;


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
                        <p>1/5</p>
                    </div>
                </div>
                <div className={styles.questionSection}>
                    <h2 className={styles.question}>How old are you?</h2>
                        <button onClick={() => {setAge('18 and under'); {setClicked(!clicked); setUClicked(!uClicked)}}}className={underClassName}>18 and under</button>
                        <button onClick={() =>{setAge('19-25'); {setClicked(!clicked); setNClicked(!nClicked)}}}className={nineteenClassName}>19-25</button>
                        <button onClick={() =>{setAge('26-39'); {setClicked(!clicked); setTClicked(!tClicked)}}} className={twentyClassName}>26-39</button>
                        <button onClick={() =>{setAge('40+'); {setClicked(!clicked); setFClicked(!fClicked)}}} className={fortyClassName}>40+</button>
                </div>
                <div className={styles.seperator}></div>
                <div className={styles.controls}>
                    <Link href={''}><BackButton/></Link>
                    {
                        clicked ? <><Link href={'./q2'}><button className={styles.nextButton}onClick={() => CheckAge()}>Next</button></Link></> : <></>
                    }
                </div>
            </div>
        </div>
    )
}