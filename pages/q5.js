import styles from '@/styles/Q5.module.css'
import BackButton from '@/components/BackButton'
import SkipButton from '@/components/SkipButton'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Q5({
    passRegion
}) {

    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [region, setRegion] = useState('Select Region');
    const [clicked, setClicked] = useState(false);
    const router = useRouter();
    const handleButtonClick = () => {
        router.push({
            pathname:'/s1',
            query: {region},
        });
        setClicked(true);
    }


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
                        <p>5/5</p>
                    </div>
                </div>
                <div className={styles.questionSection}>
                    <h2 className={styles.question}>What region are you originally from?</h2>
                        <button className={styles.answerButton}>
                            {region} 
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
                                        <li onClick={() => {setRegion('North America'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>North America</li>
                                        <li onClick={() => {setRegion('Africa'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Africa</li>
                                        <li onClick={() => {setRegion('Asia'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Asia</li>
                                        <li onClick={() => {setRegion('Central America'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Central America</li>
                                        <li onClick={() => {setRegion('Eastern Europe'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Eastern Europe</li>
                                        <li onClick={() => {setRegion('European Union'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>European Union</li>
                                        <li onClick={() => {setRegion('Middle East'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Middle East</li>
                                        <li onClick={() => {setRegion('Oceania'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Oceania</li>
                                        <li onClick={() => {setRegion('Scandinavia'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>Scandinavia</li>
                                        <li onClick={() => {setRegion('South America'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>South America</li>
                                        <li onClick={() => {setRegion('The Caribbean'); setDropDownOpen(!dropDownOpen); setClicked(true)}}>The Caribbean</li>
                                    </ul>
                            </> : <></>
                        }
                </div>
                <div className={styles.seperator}></div>
                <div className={styles.controls}>
                    <Link href={'./q4'}><BackButton/></Link>
                    {
                        clicked ? <><Link href={'/landingpage'}><button className={styles.nextButton} onClick={handleButtonClick}>Submit</button></Link></> : <></>
                    }
                </div>
            </div>
        </div>
    )
}