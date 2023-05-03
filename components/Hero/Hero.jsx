import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <>
    <section className={styles.hero}>
        <div className={styles.heroimg}>
            <Image src='/img/hero-img.png' width={600} height={700} alt='hero' />
        </div>
        <div className={styles.container}>
            <div className={styles.inner}>
                <h2>Ihre Autowerkstatt in Gelsenkirchen</h2>
                <div className={styles.info}>
                <div className={styles.box}>
                <i class="bi bi-gear-fill"></i>
                <p>Ihre Autowerkstatt in Gelsenkirchen</p>
                </div>
                <div className={styles.box}>
                <i class="bi bi-gear-fill"></i>
                <p>Erfahrene Mechaniker und Meister</p>
                </div>
                <div className={styles.box}>
                <i class="bi bi-gear-fill"></i>
                <p>Moderne Werkstattausrüstung</p>
                </div>
                <div className={styles.box}>
                <i class="bi bi-gear-fill"></i>
                <p>Breites Spektrum an Dienstleistungen (von A wie ABS bis Z wie Zylinderkopfdichtung, wir sind für Sie da!)</p>
                </div>
                <div className={styles.box}>
                <i class="bi bi-gear-fill"></i>
                <p>Erfahrene Mechaniker und Meister mit jahrzehntelange Erfahrung im KFZ Gewerbe</p>
                </div>
                </div>
                <Link href='/'>
                <p>Kontaktformular</p>
                <i class="bi bi-envelope"></i>
            </Link>
            </div>
        </div>
    </section>
    <Image className={styles.herobottumimg} src='/img/img.png' width={1349} height={48} alt='img' />
    </>
  )
}

export default Hero
