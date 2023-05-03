import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'

function Asaid() {
    return (
        <section className={styles.asaid}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.right}>
                        <h2>Die Leistungen <br /> unseres Fachbetriebes</h2>
                        <p>Sehr günstige Lage der Autowerkstatt mit sehr guter Verkehrsanbindung in Gelsenkirchen Buer</p>
                        <Link href='/'>
                            <span>Kontaktformular</span>
                            <i class="bi bi-envelope"></i>
                        </Link>
                    </div>
                    <div className={styles.left}>
                    <div className={styles.box}>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className={styles.block}>
                                <Image src='/img/icon.png' width={61} height={61} alt='icon' />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Asaid
