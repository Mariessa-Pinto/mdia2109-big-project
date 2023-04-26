import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/s4.module.css'
import Footer from '@/components/Footer'
import { storyData } from '@/data/organizationdata'
import { useState, useEffect } from 'react'
import BackButton from '@/components/BackButton'
import Link from 'next/link'

export default function StoryFour() {

  const [information, setInformation] = useState([...storyData.gov]);
    
  const [isRegion, setIsRegion] = useState(null);

  useEffect(() => {
    const region = localStorage.getItem('region');
    setIsRegion(region);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Borderless</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.topsection}>
        <h1 className={styles.title}>Stories of Hope and Help</h1>
      </div>
      <main className={styles.main}>
        <div className={styles.storycontent}>
          {
            information && information.map((info, index) => {
              if(info.region === isRegion){
                return (
                  <div className={styles.middleeast} key={index}>
                    <Image
                      src={info.image}
                      height={186}
                      width={364}
                      alt={"pic"}
                      className={styles.image}
                    />
                    <div className={styles.header}>
                      {info.title}
                    </div>
                    <div className={styles.body}>
                      {info.body}
                    </div>
                    <div className={styles.body}>
                        {info.bodytwo}
                      </div>
                    <Link href={'./stories'}><BackButton/></Link>
                  </div>
                )
              }
            })
          }
        </div>
      </main>
      <Footer/>  
    </div>
  )
}