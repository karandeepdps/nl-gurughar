"use client";

import { marked } from "marked"; // Import marked library
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
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

### **Opening Timings:**
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
];

export default function Events() {

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1>Upcoming Events</h1>
                <div className={styles.eventGrid}>
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </div>
                <Footer />
            </main>
        </>
    );
}

function EventCard({ event }: { event: Event }) {
    return (
        <div className={`${styles.eventCard} ${event.name === "Gurudwara Opening Update" ? styles.noticeBox : ""}`}>
            <img src={event.image} alt={event.name} className={styles.eventImage} />
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: marked(event.description), // Parse markdown to HTML
                }}
            ></div>
        </div>
    );
}
