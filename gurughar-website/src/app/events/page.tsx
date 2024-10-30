"use client"
import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Modal from '../../../components/Modal';
import styles from '../../../styles/Events.module.css';

type Event = {
    name: string;
    date: string;
    description: string;
    image: string;
    link: string;
};

const events: Event[] = [
    {
        name: 'Bandi Chhor Divas',
        date: 'November 1, 2024',
        description: 'Bandi Chhor Divas (Day of Liberation) is a Sikh celebration commemorating the release of Guru Hargobind and 52 Hindu kings from Gwalior Fort, coinciding with Diwali in Punjab and across India.',
        image: '/images/guruji.jpeg',
        link: 'https://en.wikipedia.org/wiki/Bandi_Chhor_Divas',
    },
    {
        name: 'Saka Panja Sahib',
        date: 'October 30, 1922',
        description: 'Saka Panja Sahib is a historic event that symbolizes the sacrifice of Sikhs who gave their lives to serve Langar to fellow Sikhs who were imprisoned.',
        image: '/images/saka/1.PNG',
        link: '', 
    },
];

export default function Events() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sakaText = `
        Saka Panja Sahib is a real story of sacrifice for Sewa. 
        The Saka occurred at Panja Sahib, Hasan Abdal, Pakistan. 
        Bhai Karam Singh & Bhai Partap Singh attained martyrdom in this incident.
    `;
    const sakaImages = [
        '/images/saka/1.PNG',
        '/images/saka/2.PNG',
        '/images/saka/3.PNG',
        '/images/saka/4.PNG',
        '/images/saka/5.PNG',
        '/images/saka/6.PNG',
        '/images/saka/7.PNG',
        '/images/saka/8.PNG',
    ];

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1>Upcoming Events</h1>
                <div className={styles.eventGrid}>
                    {events.map((event, index) => (
                        <EventCard 
                            key={index} 
                            event={event} 
                            onLearnMore={event.name === 'Saka Panja Sahib' ? handleOpenModal : undefined} 
                        />
                    ))}
                </div>
                <Modal 
                    isOpen={isModalOpen} 
                    onClose={handleCloseModal} 
                    title="Saka Panja Sahib" 
                    images={sakaImages} 
                    text={sakaText} 
                />
            </main>
            <Footer />
        </>
    );
}

function EventCard({ event, onLearnMore }: { event: Event; onLearnMore?: () => void }) {
    return (
        <div className={styles.eventCard}>
            <img src={event.image} alt={event.name} className={styles.eventImage} />
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p>{event.description}</p>
            {onLearnMore && (
                <button onClick={onLearnMore} className={styles.learnMoreButton}>
                    Learn More
                </button>
            )}
        </div>
    );
}
