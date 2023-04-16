import styles from '@/styles/Q4.module.css'
import BackButton from '@/components/BackButton'
import SkipButton from '@/components/SkipButton'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Q4() {
    
    const [value, setValue] = useState('');

    return (
        <>
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
                    <p>4/5</p>
                </div>
            </div>
            <div className={styles.questionSection}>
                <h2 className={styles.question}>How satisfied are you with your experience as a refugee in Canada?</h2>
                <div className={styles.answerBox}>
                    <div className={styles.rangeSlider}>
                        <div className={styles.sliderLabels}>
                            <p>Not Satisfied</p>
                            <p>Satisfied</p>
                            <p>Very Satisfied</p>
                        </div>
                        <input 
                            type='range' 
                            min={1} 
                            max={100} 
                            value={value} 
                            className={styles.mySlider}
                            onChange={(event) => setValue(event.target.value)}
                        />
                        <p className={styles.value}>Current Value: {value}</p>
                    </div>
                </div>
            </div>
            <div className={styles.seperator}></div>
            <div className={styles.controls}>
                <Link href={'./q3'}><BackButton/></Link>
                {
                    value !== '' ? <><Link href={'./q5'}><button className={styles.nextButton}>Next</button></Link></> : <></>
                }
            </div>
        </div>
        </>
    )
}