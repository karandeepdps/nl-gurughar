// pages/payment.js
import React from 'react';
import styles from '../../../styles/Payment.module.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function Payment() {
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

    return (
        <>
            <Navbar />

        <div className={styles.container}>
            <h1>Sikh Society-Newfoundland, NL </h1>
            <h1> ਸਿੱਖ ਸੁਸਾਇਟੀ - ਨਿਊਫਾਊਡਲੈਂਡ  </h1>
            <h2> Charity No </h2>
            <div className={styles.donationGrid}>
                {donations.map((donation, index) => (
                    <div key={index} className={styles.donationCard}>
                        <div className={styles.imageWrapper}>
                            <img src={donation.image} alt={donation.description} className={styles.donationImage} />
                        </div>
                        <p className={styles.donationDescription}>{donation.description}</p>
                        <button className={`${styles.button} donation-button`} data-amount={donation.amount}>Donate ${donation.amount}</button>
                    </div>
                ))}
            </div>
            <Footer />

        </div>
        </>

    );
}
