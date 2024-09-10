import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function Contact() {
    return (
        <>
            <Navbar />

            {/* Full-height wrapper with flex to push footer to the bottom */}
            <div className="flex flex-col min-h-screen bg-gray-50">

                {/* Content Area: grows to take available space */}
                <div className="flex-grow flex flex-col items-center justify-center text-center p-2">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                        We are always here to support our community. Please contact the Maritime Sikh Society for any questions, support, suggestions, or help.
                    </p>

                    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* General Inquiry Card */}
                        <div className="bg-yellow-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-brown-700">
                            <div className="flex items-center justify-center mb-4">
                                {/* Add an SVG icon here if needed */}

                            </div>
                            <h2 className="text-2xl font-semibold mb-4">General Inquiry</h2>
                            <p className="text-lg mb-2 font-medium">Gurdwara Maritime Sikh Society</p>
                            <p className="text-lg mb-2">680 Logy Bay Rd, Logy Bay, NL A1K 3B5</p>
                            <p className="text-lg mb-2">Phone: <a href="tel:+17097547454" className="text-brown-800 hover:underline">(709) 754-7454</a></p>
                            <p className="text-lg mb-2">Email: <a href="mailto:maritimesikhs@gmail.com" className="text-brown-800 hover:underline">maritimesikhs@gmail.com</a></p>
                        </div>

                        {/* Langar Section Card */}
                        <div className="bg-yellow-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-brown-700">
                            <div className="flex items-center justify-center mb-4">
                                {/* Add an SVG icon for Langar */}

                            </div>
                            <h2 className="text-2xl font-semibold mb-4">Langar (Community Kitchen)</h2>
                            <p className="text-lg mb-2 font-medium">Navdeep Singh</p>
                            <p className="text-lg mb-2">Phone: <a href="tel:+17093279685" className="text-brown-800 hover:underline">(709) 327 9685</a></p>
                        </div>

                        {/* IT Services Card */}
                        <div className="bg-yellow-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-brown-700">
                            <div className="flex items-center justify-center mb-4">
                                {/* Add an SVG icon for IT Services */}

                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer always at the bottom */}
                <Footer />
            </div>
        </>
    );
}
