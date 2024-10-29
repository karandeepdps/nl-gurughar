// src/app/hukamnama/page.tsx

"use client"; 

import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import styles from '../../../styles/Hukamnama.module.css'; 

export default function Hukamnama() {
    const [hukamnamaData, setHukamnamaData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHukamnama = async () => {
            try {
                const response = await fetch('/api/hukamnama');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json(); 
                setHukamnamaData(data);
            } catch (err: any) {
                console.error('Error fetching Hukamnama:', err);
                setError(err.message || 'Failed to fetch Hukamnama');
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
                <h2><b>Today's Hukamnama</b></h2>
                {loading && <p>Loading Hukamnama...</p>}
                {error && <p className={styles.error}>{error}</p>}
                {hukamnamaData && (
                    <div className={styles.hukamnamaContent}>
                        <div className={styles.card}>
                        <h2>Gurmukhi</h2>
                        {hukamnamaData.hukamnama.map((item: any, index: number) => (
                            <p key={index} className={styles.gurmukhi}>{item.line.gurmukhi.unicode}</p>
                        ))}
                    </div>
                    <div className={styles.card}>
                        <h2>English</h2>
                        {hukamnamaData.hukamnama.map((item: any, index: number) => (
                            <p key={index} className={styles.english}>{item.line.translation.english.default}</p>
                        ))}
                    </div>
                    <div className={styles.card}>
                        <h2>Punjabi</h2>
                        {hukamnamaData.hukamnama.map((item: any, index: number) => (
                            <p key={index} className={styles.punjabi}>{item.line.translation.punjabi.default.unicode}</p>
                        ))}
                    </div>
                    <div className={styles.card}>
                        <h2>Devanagari</h2>
                        {hukamnamaData.hukamnama.map((item: any, index: number) => (
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
