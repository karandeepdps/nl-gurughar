import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.columns}>
                <div className={styles.logoColumn}>
                    <div className={styles.logoBackground}>
                        <img src="/assets/logo.png" alt="Gurughar Logo" className={styles.logo} />
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

                {/*<div className={styles.contactColumn}>*/}
                {/*    <button type="button" className={styles.contactButton}>*/}
                {/*        Phone*/}
                {/*        <span className={styles.contactIcon}>*/}
                {/*            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="20" width="20">*/}
                {/*                <path d="M174.754 137.015l-16.878-17.024c-7.055-7.116-18.563-7.186-25.705-.156l-.283.278-.803.794c-5.874 5.808-15.363 5.761-21.178-.105L78.719 89.344c-5.798-5.849-5.75-15.271.108-21.061l.001.001.283-.279c7.142-7.03 7.211-18.499.156-25.615L62.404 25.383c-7.061-7.122-18.581-7.185-25.72-.14l-.001-.001-11.238 11.11c-4.496 4.445-6.458 10.916-4.936 17.042 14.422 58.077 66.325 112.081 124.426 126.073 6.239 1.503 12.817-.21 17.377-4.711l12.003-11.848.284-.279c7.14-7.03 7.21-18.498.155-25.614z"/>*/}
                {/*            </svg>*/}
                {/*        </span>*/}
                {/*    </button>*/}
                {/*    <p className={styles.contactInfo}>*/}
                {/*        902-477-0008&nbsp;|&nbsp;*/}
                {/*        <a href="mailto:maritimessikhs@gmail.com" className={styles.emailLink}>maritimessikhs@gmail.com</a>*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
        </nav>
    );
}
