import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1 className={styles.heading}>Welcome to Sikh Society Newfoundland, NL
                </h1>
                <p className={styles.description}>A place of worship and community for all.</p>
            </main>
            <Footer />
        </>
    );
}
