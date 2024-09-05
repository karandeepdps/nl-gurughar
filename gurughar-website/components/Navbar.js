import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.columns}>
                <div className={styles.logoColumn}>
                    <div className={styles.logoBackground}>
                        <img src="/assets/logo.jpg" alt="Gurughar Logo" className={styles.logo} />
                    </div>
                    <div className={styles.titleContainer}>
                        <h5 className={styles.title}>
                            Newfoundland<br />
                            Sikh Society<br />
                            Gurdwara Sahib
                        </h5>
                    </div>
                </div>

                <div className={styles.navLinksColumn}>
                    <ul className={styles.navLinks}>
                        <li className={styles.navItem}>
                            <Link href="/" className={styles.navLink}>Home</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/about" className={styles.navLink}>About</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/contact" className={styles.navLink}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
