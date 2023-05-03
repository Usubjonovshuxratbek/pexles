import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.toplinerblack}></div>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <div className={styles.inner}>
                        <div className={styles.right}>
                            <Link href='/'>
                                <Image src='/img/logo .png' width={183} height={90} alt='logo' />
                            </Link>
                        </div>
                        <div className={styles.center}>
                            <Link href='/'>Startseite</Link>
                            <Link href='/'>Dienstleistungen</Link>
                            <Link href='/'>Kontakt</Link>
                        </div>

                        <div className={styles.left}>
                            <Link href='/'>Kontaktformular</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={styles.botumlinerblack}></div>
            <div className={styles.botumliner}></div>
        </header>
    )
}

export default Header