import styles from '@/styles/Q3.module.css'
import BackButton from '@/components/BackButton'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Q3() {

    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [province, setProvince] = useState('British Columbia');

    return (
        <>
        <div className={styles.main}>
            <div className={styles.titleSection}>
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
                        {province} 
                    <Image
                        src={'/icons/downArrow.svg'}
                        alt={'down arrow'}
                        height={30}
                        width={30}
                        onClick={() => setDropDownOpen(!dropDownOpen)}
                    /></button>
                    {
                        dropDownOpen ? <>
                            <ul>
                                <li onClick={() => {setProvince('British Columbia'); setDropDownOpen(!dropDownOpen)}}>British Columbia (Default)</li>
                                <li onClick={() => {setProvince('Alberta'); setDropDownOpen(!dropDownOpen)}}>Alberta</li>
                                <li onClick={() => {setProvince('Manitoba'); setDropDownOpen(!dropDownOpen)}}>Manitoba</li>
                                <li onClick={() => {setProvince('New Brunswick'); setDropDownOpen(!dropDownOpen)}}>New Brunswick</li>
                                <li onClick={() => {setProvince('Newfoundland and Labrador'); setDropDownOpen(!dropDownOpen)}}>Newfoundland and Labrador</li>
                                <li onClick={() => {setProvince('Nova Scotia'); setDropDownOpen(!dropDownOpen)}}>Nova Scotia</li>
                                <li onClick={() => {setProvince('Ontario'); setDropDownOpen(!dropDownOpen)}}>Ontario</li>
                                <li onClick={() => {setProvince('Northwest Territories'); setDropDownOpen(!dropDownOpen)}}>Northwest Territories</li>
                                <li onClick={() => {setProvince('Nunavut'); setDropDownOpen(!dropDownOpen)}}>Nunavut</li>
                                <li onClick={() => {setProvince('Quebec'); setDropDownOpen(!dropDownOpen)}}>Quebec</li>
                                <li onClick={() => {setProvince('Saskatchewan'); setDropDownOpen(!dropDownOpen)}}>Saskatchewan</li>
                                <li onClick={() => {setProvince('Prince Edward Island'); setDropDownOpen(!dropDownOpen)}}>Prince Edward Island</li>
                                <li onClick={() => {setProvince('Yukon'); setDropDownOpen(!dropDownOpen)}}>Yukon</li>
                            </ul>
                        </> : <></>
                    }
                  
            </div>
            <Link href={'./q2'}><BackButton/></Link>
        </div>
        </>
    )
}