import styles from '@/styles/Faq.module.css'
import FAQAccordion from '@/components/FAQAccordion'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton/index.js'
import { faqData } from '../data/faqData.js'
import { useState, useEffect } from 'react'
import Link from 'next/link.js'

export default function FAQ() {

    const [data, setData] = useState([...faqData.questions]);

    return (
        <>
        <div className={styles.main}>
            <div className={styles.title}>
                <h1 className={styles.header}>FAQ</h1>
                <div className={styles.back}>
                    <Link href={'/settings'}><BackButton/></Link>
                </div>
            </div>
            <div>
            {
            data && data.map((info, index) => {
                return(
                <div className={styles.questions}>
                    <FAQAccordion key={index} question={info.question} answer={info.answer}/>
                </div>
                )
            })
            }
            </div>
        </div>
        <Footer/>
        </>
    )
}