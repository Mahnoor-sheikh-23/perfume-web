import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const page = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className='md:h-[55px] h-auto text-center p-9 border border-black'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className='text-[18px] text-black' href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-[18px] text-black">Contact</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <div className="min-h-screen bg-gray-100 py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Info Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                            <p className="text-gray-600 mb-4">
                                We'd love to hear from you! Feel free to reach out to us using the contact details below:
                            </p>
                            <ul className="space-y-4 text-gray-700">
                                <li>
                                    <strong>Address:</strong> P-E-C-H-S Block 6 Main Shah-Re-Faisal Karachi, Pakistan

                                </li>
                                <li>
                                    <strong>Phone:</strong> +92 313 2686243
                                </li>
                                <li>
                                    <strong>Email:</strong>    info@perfumeonline.pk
                                </li>
                            </ul>
                        </div>

                        {/* Contact Form Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full  text-white py-2 px-4 rounded-lg  focus:outline-none hover:bg-customGold focus:ring-2 bg-black focus:ring-offset-2"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
