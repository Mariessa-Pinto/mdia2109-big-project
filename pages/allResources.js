import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/AllResources.module.css'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import ResourceCard from '@/components/ResourceCard'
import { resourceData } from '@/data/ResourceData.js'
import { useState } from 'react'

export default function AllResources() {

    const [resourceType, setResourceType] = useState([
        ...resourceData.clothing,
        ...resourceData.community,
        ...resourceData.shelter,
        ...resourceData.food
    ]);

    return (
        <div className={styles.container}>
        <Head>
            <title>Borderless - All Resources</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}>
            <div className={styles.title}>
                <Link href={'/resources'}><BackButton/></Link>
                <h1 className={styles.header}>All Resources</h1>
                <Image
                    src={'/icons/filterIcon.svg'}
                    alt={'filter icon'}
                    width={24}
                    height={12}
                />
                <Image
                    src={'/icons/searchIcon.svg'}
                    alt={'search icon'}
                    width={30}
                    height={30}
                />
            </div>
            {
                resourceType && resourceType.map((info, index) => {
                    if(info.province === "BC") {
                        return (
                            <div>
                                <ResourceCard
                                    key={index}
                                    title={info.name}
                                    resource={info.resources}
                                    location={info.location}
                                    contact={info.contact}
                                    img={info.image}
                                    icon={info.icon}
                                />
                            </div>
                        )
                    }
                })
            }
        
        <Footer/>
        </div>
        </div>
    )
}