import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import styles from '../../../styles/Events.module.css';

const events = [
    {
        name: 'Bandi Chhor Divas',
        date: 'November 1, 2024',
        description: 'Bandi Chhor Divas (Day of Liberation) is a Sikh celebration commemorating the release of Guru Hargobind and 52 Hindu kings from Gwalior Fort, coinciding with Diwali in Punjab and across India.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Diwali_fireworks_and_lighting_celebrations_India_2012.jpg', 
        link: 'https://en.wikipedia.org/wiki/Bandi_Chhor_Divas',
    },
    // Add more events here
];

export default function Events() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1><b>Upcoming Events</b></h1>
                <div className={styles.eventGrid}>
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

function EventCard({ event }) {
    return (
        <div className={styles.eventCard}>
            <img src={event.image} alt={event.name} className={styles.eventImage} />
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p>{event.description}</p>
            <a href={event.link} className={styles.eventLink} target="_blank" rel="noopener noreferrer">
                Learn More
            </a>
        </div>
    );
}
