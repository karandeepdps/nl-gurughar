"use client"; // Add this at the top of the file

import React, { useState } from 'react';
import Script from 'next/script';
import styles from '../../../styles/Payment.module.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function Payment() {
    const [customAmount, setCustomAmount] = useState('');

    const donations = [
        { amount: 5, image: '/images/donation0.jpg', description: 'ਦਸਵੰਦ ਸੇਵਾ' },
        { amount: 11, image: '/images/donation1.jpg', description: 'ਦਸਵੰਦ ਸੇਵਾ' },
        { amount: 21, image: '/images/donation2.jpg', description: 'ਦਸਵੰਦ ਸੇਵਾ' },
        { amount: 31, image: '/images/donation3.jpg', description: 'ਦਸਵੰਦ ਸੇਵਾ' },
        { amount: 51, image: '/images/donation4.jpg', description: 'ਦਸਵੰਦ ਸੇਵਾ' },
        { amount: 101, image: '/images/donation5.jpg', description: 'ਦਸਵੰਦ ਸੇਵਾ' },
        { amount: 201, image: '/images/donation6.jpg', description: 'ਦਸਵੰਦ ਸੇਵਾ' },
        { amount: 301, image: '/images/donation7.jpg', description: 'ਦਸਵੰਦ ਸੇਵਾ' },
        { amount: 501, image: '/images/donation8.jpg', description: 'ਦਸਵੰਦ ਸੇਵਾ' },
        { amount: 1001, image: '/images/donation9.jpg', description: 'ਦਸਵੰਦ ਸੇਵਾ' },
    ];

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
};


    const handleCustomDonation = () => {
        if (customAmount && !isNaN(customAmount) && customAmount > 0) {
            const redirectUrl = `https://newfoundland-sikh-society.square.site/?amount=${customAmount}`;
            window.location.href = redirectUrl;
        } else {
            alert('Please enter a valid amount.');
        }
    };

    return (
        <>
            <Navbar />

            <div className={styles.container}>
                <h1>Sikh Society-Newfoundland, NL</h1>
                <h1>ਸਿੱਖ ਸੁਸਾਇਟੀ - ਨਿਊਫਾਊਡਲੈਂਡ</h1>
                <h2>Charity No 892410440RR0001</h2>

                {/* Custom donation field */}
                <div className={styles.donationCard}>
                    <div className={styles.imageWrapper}>
                        <img src="/images/donation7.jpg" alt="Custom Donation" className={styles.donationImage} />
                    </div>
                    <p className={styles.donationDescription}>Custom Donation</p>
                    <input
                        type="number"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Enter custom amount"
                        className={styles.customDonationInput}
                    />
                    <button className={styles.button} onClick={handleCustomDonation}>
                        Donate Custom Amount
                    </button>
                </div>

                <div className={styles.donationGrid}>
                    {donations.map((donation, index) => (
                        <div key={index} className={styles.donationCard}>
                            <div className={styles.imageWrapper}>
                                <img src={donation.image} alt={donation.description} className={styles.donationImage} />
                            </div>
                            <p className={styles.donationDescription}>{donation.description}</p>
                            <button className={`${styles.button} donation-button`} data-amount={donation.amount}>
                                Donate ${donation.amount}
                            </button>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>

            {/* Load the open_pos.js script */}
            <Script src="/js/open_pos.js" strategy="afterInteractive" />
        </>
    );
}
