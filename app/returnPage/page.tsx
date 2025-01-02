import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const ReturnRefundPolicy = () => {
    return (
        <div>
            <Navbar />
            <div className=" min-h-screen p-5 md:p-10">
                <div className="w-full  p-5 md:p-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                        Return & Refund Policy by Perfume Online: Ensuring Your Satisfaction
                    </h1>

                    <p className="text-gray-700 mb-4">
                        At Perfume Online, we care about you and your happiness. We promise to keep your personal information safe because your trust is important. We work hard to make sure your privacy is always a top priority.
                    </p>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-3">Continuous Improvement</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Our commitment to your satisfaction involves a continuous improvement process.</li>
                        <li>We enhance our policies to adapt to evolving customer needs and industry standards.</li>
                        <li>Your feedback is invaluable, and we welcome it as an opportunity to refine and optimize our services.</li>
                    </ul>
                    <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-3">Data Security</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>At Perfume Online, we prioritize the security of your data.</li>
                        <li>We assure you that your information is safe with us; we do not leak any of your valuable data.</li>
                    </ul>
                    <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-3">Transparency Through Videos</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>We encourage our customers to share the excitement of receiving their parcels.</li>
                        <li>Record the video before you open the package.</li>
                        <li>Send a video when opening your parcel via WhatsApp within 24 hours to add a personal touch and enhance transparency.</li>
                    </ul>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-3">Return Policy</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>We understand if you are unsatisfied with the product or want to return it.</li>
                        <li>However, returns are only accepted if there is any damage or missing items in your parcel.</li>
                        <li>Return requests must be sent within 3 days after delivery. Your satisfaction is our priority.</li>
                    </ul>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-3">Refund Policy</h2>
                    <p className="text-gray-700 mb-4">We have no refund policy.</p>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-3">
                        Advance Payment for High-Value Orders
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>For orders exceeding 10k, we prioritize security.</li>
                        <li>A 10% advance payment is required to ensure a secure transaction for you and Perfume Online.</li>
                    </ul>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-3">Community Engagement</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Perfume Online is not just a platform; it's a community of like-minded individuals who value quality, security, and satisfaction.</li>
                        <li>Engage with us on social media in discussions, and be a part of a community that prioritizes the well-being and happiness of its members.</li>
                    </ul>

                    <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-3">Global Standards</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Perfume Online has global standards in data protection and privacy.</li>
                        <li>Our policies align with international regulations to provide reliable service, regardless of location.</li>
                    </ul>

                    <p className="text-gray-700 mt-6">
                        At Perfume Online, we protect your satisfaction. It's a philosophy that drives every decision. We are committed to offering you a secure, transparent, and satisfying shopping experience. Our journey doesn't end with a successful transaction; it begins with it. Your trust inspires us to evolve and enhance our services. We ensure that every interaction with Perfume Online exceeds your expectations. Our dedicated customer service team is here to help if you have any questions or suggestions.
                    </p>

                    <p className="text-gray-700 mt-6">
                        Thank you for choosing Perfume Online. We value your trust and look forward to serving you with excellence.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ReturnRefundPolicy;
