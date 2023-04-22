import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/settings.module.css'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Settings() {

return (
        <div className={styles.container}>
        <Head>
            <title>Borderless - Settings</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <div className={styles.main}>
                <div className={styles.title}>
                    <h1 className={styles.header}>Settings</h1>
                    <Image
                        src={'/images/profilePicture.png'}
                        alt={'profile picture of women'}
                        width={157}
                        height={157}
                        className={styles.profilePic}
                    />
                    <h2 className={styles.header}>Hi Maria Duarte</h2>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <Image
                            src={'/icons/accountIcon.svg'}
                            alt={'account icon'}
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className={styles.titles}>
                        <h3 className={styles.subheader}>Account</h3>
                        <p className={styles.text}>Privacy, security, change email or phone number, language preferences</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <Image
                            src={'/icons/notificationsBell.svg'}
                            alt={'notifications icon'}
                            width={25}
                            height={30}
                        />
                    </div>
                    <div className={styles.titles}>
                        <h3 className={styles.subheader}>Notifications</h3>
                        <p className={styles.text}>Messages, tones</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <Image
                            src={'/icons/questionIcon.svg'}
                            alt={'question icon'}
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className={styles.titles}>
                        <h3 className={styles.subheader}>Help</h3>
                        <p className={styles.text}>Help center, contact us, privacy policy</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <Image
                            src={'/icons/nightIcon.svg'}
                            alt={'moon icon'}
                            width={30}
                            height={28}
                        />
                    </div>
                    <div className={styles.titles}>
                        <h3 className={styles.subheader}>Dark Mode/Light Mode</h3>
                    </div>
                </div>
                <Link href={'/faq'}><div className={styles.card}>
                    <div className={styles.icon}>
                        <Image
                            src={'/icons/FAQ.svg'}
                            alt={'FAQ icon'}
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className={styles.titles}>
                        <h3 className={styles.subheader}>FAQ</h3>
                    </div>
                </div></Link>
            <Footer/>
            </div>
        </div>
    )
}