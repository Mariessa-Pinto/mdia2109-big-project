import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/stats.module.css'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Link from 'next/link'
import DoughnutChartMale from '@/components/MaleChart'
import BackButton from '@/components/BackButton'
import DoughnutChartFemale from '@/components/FemaleChart'
import DoughnutChartUniversal from '@/components/UniversalChart'








export default function Stats() {
    return (

        <>
     <Head>
        <title>Borderless</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>



<div className={styles.top}>
    
<Link href={'./landingpage'}><BackButton/></Link>
    
    <h1 className={styles.header}>Statistics</h1>

</div>
      
 <main className={styles.maincontent}>

    <div className={styles.section1}>
            <h2 className={styles.title}>Empowering Through Data</h2>
            <p className={styles.body}>Our goal is to provide you with data and statistics that encourage you and shed light on the progress being made by Canadian Refugees</p>

    </div>

    <div className={styles.charts}>
    
    
    <DoughnutChartMale/>
    <DoughnutChartFemale/>
    <DoughnutChartUniversal/>
   
   
   
   
   
   
   </div>

</main>

<Footer/>
  
        </>
    )
}