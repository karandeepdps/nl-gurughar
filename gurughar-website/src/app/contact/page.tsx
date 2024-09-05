import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import styles from '../../../styles/Contact.module.css';

export default function Contact() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1>Contact Us</h1>
                <p>Email: info@gurughar.ca</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Address: 123 Main Street, St. John&apos;s, NL</p>
            </main>
            <Footer />
        </>
    );
}
