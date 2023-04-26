import styles from '@/styles/Q3.module.css'
import BackButton from '@/components/BackButton'
import SkipButton from '@/components/SkipButton'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Q3() {

    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [province, setProvince] = useState(null);
    const [clicked, setClicked] = useState(false);

    const [isProvince, setIsProvince] = useState(null);

    const CheckProvince = () => {
        console.log(province)

        if(province !== null) {
            localStorage.setItem('province', province);
            setIsProvince(province);
        }
    };

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
                        <p>3/5</p>
                    </div>
                </div>
                <div className={styles.questionSection}>
                    <h2 className={styles.question}>What province do you reside in?</h2>
                        <button className={styles.answerButton}>
                            {province ? province : 'Select Province/Territory'} 
                        <Image
                            src={'/icons/downArrow.svg'}
                            alt={'down arrow'}
                            height={30}
                            width={30}
                            onClick={() => setDropDownOpen(!dropDownOpen)}
                        /></button>
                        {
                            dropDownOpen ? <>
                                    <ul className={styles.options}>
                                        <li onClick={() => {setProvince('British Columbia'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>British Columbia</li>
                                        <li onClick={() => {setProvince('Alberta'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Alberta</li>
                                        <li onClick={() => {setProvince('Manitoba'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Manitoba</li>
                                        <li onClick={() => {setProvince('New Brunswick'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>New Brunswick</li>
                                        <li onClick={() => {setProvince('Newfoundland and Labrador'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Newfoundland and Labrador</li>
                                        <li onClick={() => {setProvince('Nova Scotia'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Nova Scotia</li>
                                        <li onClick={() => {setProvince('Ontario'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Ontario</li>
                                        <li onClick={() => {setProvince('Northwest Territories'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Northwest Territories</li>
                                        <li onClick={() => {setProvince('Nunavut'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Nunavut</li>
                                        <li onClick={() => {setProvince('Quebec'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Quebec</li>
                                        <li onClick={() => {setProvince('Saskatchewan'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Saskatchewan</li>
                                        <li onClick={() => {setProvince('Prince Edward Island'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Prince Edward Island</li>
                                        <li onClick={() => {setProvince('Yukon'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Yukon</li>
                                    </ul>
                            </> : <></>
                        }
                </div>
                <div className={styles.seperator}></div>
                <div className={styles.controls}>
                    <Link href={'./q2'}><BackButton/></Link>
                    {
                        clicked ? <><Link href={'./q4'}><button className={styles.nextButton} onClick={() => CheckProvince()}>Next</button></Link></> : <></>
                    }
                </div>
            </div>
        </div>
    )
}