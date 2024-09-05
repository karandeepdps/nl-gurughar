import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import styles from '../../../styles/About.module.css';

export default function About() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <History />
                <MissionAndGoals />
                <VolunteerSection />
            </main>
            <Footer />
        </>
    );
}

function History() {
    return (
        <section className={styles.section}>
            <h2>Our History</h2>
            <p>
                The Sikh community in St. John’s began with three families over thirty years ago. Without a traditional Gurdwara, the families practiced in their homes and warmly welcomed guests following the ‘open doors’ custom of Sikhism. In 2005, the first Gurdwara in Newfoundland was established at 680 Logy Bay Road.
            </p>
            <img src="/assets/307981975_391622403159452_5644002431256489760_n.jpg" alt="Gurdwara History" className={styles.sectionImage} />
        </section>
    );
}

function MissionAndGoals() {
    return (
        <section className={styles.section}>
            <h2>Our Mission and Goals</h2>
            <p>
                At Gurughar, we are committed to serving the community with open arms, guided by Sikh principles. Our mission is to provide a welcoming space for worship and community service, while also promoting knowledge and understanding of the Sikh faith in St. John&aposs.
            </p>
        </section>
    );
}

function VolunteerSection() {
    return (
        <section className={styles.section + ' ' + styles.volunteer}>
            <h2>Get Involved</h2>
            <p>We actively engage in community service through local kitchens, Habitat for Humanity, and more. Interested in joining us? Click below to volunteer!</p>
            <button className={styles.volunteerButton}>Volunteer Now</button>
        </section>
    );
}
