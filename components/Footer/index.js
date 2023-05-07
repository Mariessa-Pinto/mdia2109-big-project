import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (  
      <div className={styles.responsive}>
        <div className={styles.container}>    
          <div className={styles.footer}>
            <Link href={'/landingpage'}><div className={styles.link}>
            <Image
              src={'/icons/home.svg'}
              alt={'home icon'}
              width={43}
              height={38}
            />
            <h2 className={styles.name}>Home</h2>
            </div></Link>
            <Link href={'/resources'}><div className={styles.link}>
              <Image
                src={'/icons/resources.svg'}
                alt={'resource icon'}
                width={43}
                height={38}
              />
              <h2 className={styles.name}>Support</h2>
            </div></Link>
            <Link href={'/stories'}><div className={styles.link}>
              <Image
                src={'/icons/stories.svg'}
                alt={'stories icon'}
                width={43}
                height={38}
              />
            <h2 className={styles.name}>Stories</h2>
            </div></Link>
            <Link href={'/settings'}><div className={styles.link}>
              <Image
                src={'/icons/settings.svg'}
                alt={'settings icon'}
                width={38}
                height={38}
              />
              <h2 className={styles.name}>Settings</h2>
            </div></Link>
          </div> 
        </div>
      </div>
    )
}