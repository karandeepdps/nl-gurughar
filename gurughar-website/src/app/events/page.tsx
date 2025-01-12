"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Modal from "../../../components/Modal";
import styles from "../../../styles/Events.module.css";

type Event = {
    name: string;
    date: string;
    description: string;
    image: string;
    link?: string;
};

const events: Event[] = [
    {
        name: "Gurudwara Opening Update",
        date: "Effective Immediately",
        description: `
            **Guru Pyari Sadh Sangat Ji,**
            **Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh!**
            
            With the blessings of Akal Purakh, we are thrilled to announce the **Gurudwara Sahib will now be open on additional days!** 

            **Opening Timings:**
            - **Friday**: 6 PM - 9 PM
            - **Saturday**: 10 AM - 1 PM
            - **Sunday**: 10 AM - 1 PM

            Currently, **Langar Seva** will continue only on Sundays, with plans to expand this service in the future. Please follow parking guidelines when visiting.

            If you have questions or suggestions, contact the **Executive Committee**.

            **Location:**  
            Newfoundland Sikh Society, 680 Logy Bay Road, Logy Bay, NL, Canada, A1K 3B5.
        `,
        image: "/images/notice.png", // Replace with a relevant image or icon
    },
    {
        name: "Bandi Chhor Divas",
        date: "November 1, 2024",
        description:
            "Bandi Chhor Divas (Day of Liberation) commemorates the release of Guru Hargobind Ji and 52 Hindu kings from Gwalior Fort. It coincides with Diwali in Punjab and across India.",
        image: "/images/guruji.jpeg",
        link: "https://en.wikipedia.org/wiki/Bandi_Chhor_Divas",
    },
    {
        name: "Saka Panja Sahib",
        date: "October 30, 1922",
        description:
            "Saka Panja Sahib is a historic event symbolizing the sacrifice of Sikhs who gave their lives to serve Langar to fellow Sikhs who were imprisoned.",
        image: "/images/saka/1.PNG",
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
        "/images/saka/1.PNG",
        "/images/saka/2.PNG",
        "/images/saka/3.PNG",
        "/images/saka/4.PNG",
        "/images/saka/5.PNG",
        "/images/saka/6.PNG",
        "/images/saka/7.PNG",
        "/images/saka/8.PNG",
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
                            onLearnMore={event.name === "Saka Panja Sahib" ? handleOpenModal : undefined}
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
        <div className={`${styles.eventCard} ${event.name === "Gurudwara Opening Update" ? styles.noticeBox : ""}`}>
            <img src={event.image} alt={event.name} className={styles.eventImage} />
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p dangerouslySetInnerHTML={{ __html: event.description }}></p>
            {onLearnMore && (
                <button onClick={onLearnMore} className={styles.learnMoreButton}>
                    Learn More
                </button>
            )}
        </div>
    );
}
