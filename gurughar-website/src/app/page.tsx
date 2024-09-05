import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1 className={styles.heading}>Welcome to Sikh Society Newfoundland, NL</h1>
                <p className={styles.description}>A place of worship and community for all.</p>

                {/* Inspirational Quote from Guru Granth Sahib Ji */}
                <p className={styles.quote}>
                    "In the Company of the Guru, the mind becomes peaceful and the heart pure."
                </p>

                {/* Call to Action Buttons */}
                <div className={styles.callToAction}>
                    <button>Learn More</button>
                    <button>Get Involved</button>
                </div>
            </main>

            {/* Community Services Section */}
            <section className={styles.servicesSection}>
                <h2>Our Services</h2>
                <p>
                    The Sikh Society is committed to serving the community through spiritual guidance, food distribution, and volunteer work.
                </p>
                <p>
                    Join us in making a positive impact on the lives of people in Newfoundland and beyond.
                </p>
            </section>

            {/* Contact and Address Section */}
            <section className={styles.contactSection}>
                <div className={styles.contactInfoWrapper}>
                    <div className={styles.contactInfo}>
                        <h2>Contact Us</h2>
                        <p>
                            <strong>Gurudwara Sikh Society of Newfoundland</strong><br />
                            680 Logy Bay Rd, St. John&apos;s, NL, A1K 3B5<br />
                            Tel: +1 (709) 754-7454.<br />
                            Email: <a href="mailto:K@gmail.com">K@gmail.com</a>
                        </p>
                    </div>

                    {/* Google Map */}
                    <div className={styles.mapContainer}>
                        <iframe
                            title="Gurudwara Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.0666124138943!2d-52.69071569999999!3d47.6248364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca6d084c2652f%3A0x923b81dc6697834f!2s680%20Logy%20Bay%20Rd%2C%20Logy%20Bay%2C%20NL%20A1K%203A2!5e0!3m2!1sen!2sca!4v1725497693959!5m2!1sen!2sca"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
}
