import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/landingpage.module.css'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ImageSlider from '@/components/Carousel'
import OntarioSlider from '@/components/OntarioCarousel'
import { useState } from 'react'
import { useEffect } from 'react'
export default function LandingPage() {

    var title = process.env.NEXT_PUBLIC_HOME;
    const [isProvince, setIsProvince] = useState(null);

    useEffect(() => {
      const province = localStorage.getItem('province');
      setIsProvince(province);
    }, []);

    console.log(isProvince);


    return( 
        <div className={styles.container}>
            <Head>
                <title>Borderless</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

<main className={styles.main}>
<div className={styles.profilesection}>
<Link href={'/settings'}>
            <div className={styles.profile}>
                    <Image
                    src='/icons/profile.png'
                    height={40}
                    width={40}
                    alt='profile'
                
                   />

          

            </div>
</Link>
    <div className={styles.title}>
         <Image className={styles.homeicon} 
        src='/icons/Bluehome.png'
        height={60}
        width={60}
         />
             <h1 className={styles.header}>{title}</h1>
     </div>
</div>
                <div className={styles.carousel}>
                {isProvince === 'British Columbia' && <ImageSlider/>}
                {isProvince === 'Ontario' && <OntarioSlider/>}
             
                
              
                </div>
                <div className={styles.section2}>
                    <div className={styles.stats}>
                        <Image className={styles.icon} 
                        src='/icons/graph.png'
                        height={60}
                        width={60}
                        alt='graph'
                
                        />
                        <Link className={styles.name} href={"/stats"}>Empowering Data</Link>
                        <p className={styles.stattext}>How you help Canada grow</p>
                    </div>
                    <div className={styles.resource}>
                        <Image className={styles.icon2} 
                        src='/icons/heart.png'
                        alt='heart'
                        height={60}
                        width={60}
                     
                         />
                        <Link className={styles.name} href={"/resources"}>Local Support</Link>
                        <p className={styles.stattext}>Find help in your area</p>
                    </div>
                </div>
                <div className={styles.section3}>
                <div className={styles.stories}>
                        <Image className={styles.icon} 
                        src='/icons/dashboardstories.png'
                        height={60}
                        width={60}
                        alt='stories'
                   
                        />
                        <Link className={styles.name} href={"/stories"}>Stories of Hope and Help</Link>
                </div>
                    <div className={styles.weather}>
                        <Image className={styles.icon} 
                        src='/icons/umbrella.png'
                        height={60}
                        width={60}
                        alt='umbrella'
                     
                        />
                        <Link className={styles.name} href={"/weather"}>Weather From Home</Link>
                </div>
                 
                </div>
                <Footer/>
            </main>

        </div>  
    )
}