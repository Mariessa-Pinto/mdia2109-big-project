import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/resources.module.css'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

export default function Resources() {

return(
    <div className={styles.container}>
    <Head>
        <title>Borderless - Resources</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.main}>
        <div className={styles.title}>
            <Link href={'/landingpage'}><BackButton/></Link>
            <h1 className={styles.header}>Resources</h1>
            <Image
                src={'/icons/searchIcon.svg'}
                alt={'search icon'}
                width={30}
                height={30}
            />
        </div>
        <Link href={'/allResources'}><div className={styles.resources}>
            <Image
                src={'/icons/resourcesIcon.svg'}
                alt={'resources icon'}
                width={100}
                height={100}
            />
            <h2 className={styles.subheader}>All resources</h2>
        </div></Link>
        <div className={styles.row}>
            <Link href={'/food'}><div className={styles.food}>
                <Image
                    src={'/icons/foodIcon.svg'}
                    alt={'food icon'}
                    width={70}
                    height={70}
                />
                <h2 className={styles.subheader}>Food</h2>
            </div></Link>
            <Link href={'/shelter'}><div className={styles.shelter}>
                <Image
                    src={'/icons/shelterIcon.svg'}
                    alt={'shelter icon'}
                    width={70}
                    height={70}
                />
                <h2 className={styles.subheader}>Shelter</h2>
            </div></Link>
        </div>
        <div className={styles.row}>
            <Link href={'/clothing'}><div className={styles.clothing}>
                <Image
                    src={'/icons/clothingIcon.svg'}
                    alt={'clothing icon'}
                    width={70}
                    height={70}
                />
                <h2 className={styles.subheader}>Clothing</h2>
            </div></Link>
            <Link href={'community'}><div className={styles.community}>
            <Image
                src={'/icons/communityIcon.svg'}
                alt={'community icon'}
                width={70}
                height={70}
            />
            <h2 className={styles.subheader}>Community</h2>
            </div></Link>
        </div>
        <Footer className={styles.footer}/>
    </div>
    </div>
)

}