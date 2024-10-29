"use client"; 

import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import styles from '../../../styles/Hukamnama.module.css'; 

interface HukamnamaLine {
    line: {
        gurmukhi: { unicode: string };
        translation: {
            english: { default: string };
            punjabi: { default: { unicode: string } };
            spanish: string;
        };
        transliteration: { 
            devanagari: { text: string };
        };
    };
}


interface HukamnamaData {
    hukamnama: HukamnamaLine[];
}

export default function Hukamnama() {
    const [hukamnamaData, setHukamnamaData] = useState<HukamnamaData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHukamnama = async () => {
            try {
                const response = await fetch('/api/hukamnama'); 
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data: HukamnamaData = await response.json(); 
                setHukamnamaData(data);
            } catch (err: unknown) {
                const errorMessage = err instanceof Error ? err.message : 'Failed to fetch Hukamnama';
                console.error('Error fetching Hukamnama:', errorMessage);
                setError(errorMessage);
            } finally {
                setLoading(false); 
            }
        };

        fetchHukamnama();
    }, []);

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h2><b>Today&apos;s Hukamnama</b></h2> {/* Escape the apostrophe */}
                {loading && <p>Loading Hukamnama...</p>}
                {error && <p className={styles.error}>{error}</p>}
                {hukamnamaData && (
                    <div className={styles.hukamnamaContent}>
                        <div className={styles.card}>
                            <h2>Gurmukhi</h2>
                            {hukamnamaData.hukamnama.map((item, index) => (
                                <p key={index} className={styles.gurmukhi}>{item.line.gurmukhi.unicode}</p>
                            ))}
                        </div>
                        <div className={styles.card}>
                            <h2>English</h2>
                            {hukamnamaData.hukamnama.map((item, index) => (
                                <p key={index} className={styles.english}>{item.line.translation.english.default}</p>
                            ))}
                        </div>
                        <div className={styles.card}>
                            <h2>Punjabi</h2>
                            {hukamnamaData.hukamnama.map((item, index) => (
                                <p key={index} className={styles.punjabi}>{item.line.translation.punjabi.default.unicode}</p>
                            ))}
                        </div>
                        <div className={styles.card}>
                            <h2>Devanagari</h2>
                            {hukamnamaData.hukamnama.map((item, index) => (
                                <p key={index} className={styles.devanagari}>{item.line.transliteration.devanagari.text}</p>
                            ))}
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
