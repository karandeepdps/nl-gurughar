import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import styles from '../../../styles/Contact.module.css';

export default function Contact() {
    return (
        <>
            <Navbar />

            {/* Main Content */}
            <main className={styles.main}>
                <h1 className={styles.heading}>Contact Us</h1>
                <p className={styles.description}>
                    We are always here to support our community. Please contact the Sikh Society - Newfoundland, NL for any questions, support, suggestions, or help.
                </p>

                {/* Card Section */}
                <div className={styles.cardWrapper}>

                    {/* General Inquiry Card */}
                    <div className={styles.card}>
                        <h2>General Inquiry</h2>
                        <p><strong>Sikh Society - Newfoundland, NL</strong></p>
                        <p>680 Logy Bay Rd, Logy Bay, NL A1K 3B5</p>
                        <p>Phone: <a href="tel:+17097547454">(709) 754-7454</a></p>
                        <p>Email: <a href="mailto:k@gmail.com">k@gmail.com</a></p>
                    </div>

                    {/* Langar Section Card */}
                    <div className={styles.card}>
                        <h2>Langar (Community Kitchen)</h2>
                        <p><strong>Navdeep Singh</strong></p>
                        <p>Phone: <a href="tel:+17093279685">(709) 327-9685</a></p>
                    </div>

                     {/* Langar Section Card */}
                    <div className={styles.card}>
                        <h2>IT Services </h2>
                        <p><strong>Karandeep Singh</strong></p>
                        <p>Email: <a href="email:karandeepdps@gmail.com">karandeepdps@gmail.com</a></p>
                    </div>


                </div>

                {/* Google Map */}
                <section className={styles.mapContainer}>
                    <iframe
                        title="Gurudwara Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.0666124138943!2d-52.69071569999999!3d47.6248364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca6d084c2652f%3A0x923b81dc6697834f!2s680%20Logy%20Bay%20Rd%2C%20Logy%20Bay%2C%20NL%20A1K%203A2!5e0!3m2!1sen!2sca!4v1725497693959!5m2!1sen!2sca"
                        loading="lazy"
                    ></iframe>
                </section>
            </main>

            <Footer />
        </>
    );
}
