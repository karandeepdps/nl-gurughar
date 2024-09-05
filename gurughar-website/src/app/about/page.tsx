import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import styles from '../../../styles/About.module.css';

export default function About() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1>About Us</h1>
                <p>Gurughar is a place for people to come together and worship. We have been serving the community for many years, promoting Sikh values and community spirit.</p>
            </main>
            <Footer />
        </>
    );
}
