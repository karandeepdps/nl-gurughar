import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function Contact() {
    return (
        <>
            <Navbar />
            
            {/* Full-height wrapper with flex to push footer to the bottom */}
            <div className="flex flex-col min-h-screen">
                
                {/* Content Area: grows to take available space */}
                <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
                    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg mb-2">Email: <a href="mailto:info@gurughar.ca" className="text-blue-600 hover:underline">info@gurughar.ca</a></p>
                    <p className="text-lg mb-2">Phone: +1 (123) 456-7890</p>
                    <p className="text-lg">Address: 123 Main Street, St. John&apos;s, NL</p>
                </div>
                
                {/* Footer always at the bottom */}
                <Footer />
            </div>
        </>
    );
}
