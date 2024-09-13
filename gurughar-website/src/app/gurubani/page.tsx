import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import styles from '../../../styles/Gurubani.module.css';

export default function GurubaniLive() {
    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.heading}>Live Gurubani from Golden Temple</h1>
                <p className={styles.description}>
                    Listen to the peaceful and divine live kirtan, daily Mukhwak, and Katha from the Golden Temple, Amritsar.
                </p>

                {/* Live Audio Streams Section */}
                <div className="row" style={{ backgroundColor: '#ffffff', maxWidth: '100%', padding: '1rem' }}>

                    {/* Live Kirtan Section */}
                    <div className="col-md-4 col-sm-12 col-lg-4">
                        <div className="text-center">
                            <p style={{ marginBottom: '0rem', paddingTop: '10px' }}>
                                <a className="btn" role="button" style={{ color: '#000000' }}>
                                    <strong>ਸਿੱਧਾ-ਪ੍ਰਸਾਰਣ / Live Kirtan</strong>
                                </a>
                            </p>
                        </div>
                        <div className="p-2 text-light">
                            <audio id="audio_1" controls autoPlay style={{ width: '100%' }}>
                                <source src="https://live.sgpc.net:8442/;nocache=889869" type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>

                    {/* Daily Mukhwak Section */}
                    <div className="col-md-4 col-sm-12 col-lg-4">
                        <div className="text-center">
                            <p style={{ marginBottom: '0rem', paddingTop: '10px' }}>
                                <a className="btn" role="button" style={{ color: '#000000' }}>
                                    <strong>ਰੋਜ਼ਾਨਾ ਮੁੱਖਵਾਕ / Daily Mukhwak</strong>
                                </a>
                            </p>
                        </div>
                        <div className="p-2 text-light">
                            <audio id="audio_2" controls preload="none" style={{ width: '100%' }}>
                                <source src="https://old.sgpc.net/hukumnama/jpeg%20hukamnama/hukamnama.mp3" type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>

                    {/* Mukhwak Katha Section */}
                    <div className="col-md-4 col-sm-12 col-lg-4">
                        <div className="text-center">
                            <p style={{ marginBottom: '0rem', paddingTop: '10px' }}>
                                <a className="btn" role="button" style={{ color: '#000000' }}>
                                    <strong>ਮੁੱਖਵਾਕ ਕਥਾ (ਗੁ: ਮੰਜੀ ਸਾਹਿਬ) / Mukhwak Katha</strong>
                                </a>
                            </p>
                        </div>
                        <div className="p-2 text-light">
                            <audio id="audio_3" controls preload="none" style={{ width: '100%' }}>
                                <source src="https://old.sgpc.net/hukumnama/jpeg%20hukamnama/katha.mp3" type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className={styles.description}>
                    For the best experience, make sure your audio is enabled and enjoy the spiritual experience.
                </p>
            </main>

            <Footer />
        </>
    );
}
