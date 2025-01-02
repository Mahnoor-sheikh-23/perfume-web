"use client";
import React from 'react';
import Image from 'next/image';
import { useCart } from "../components/CartContext";

const CheckoutPage = () => {
    const { cartItems, cartCount, removeFromCart, getTotalPrice } = useCart();
    return (
        <div>
            <div className='bg-black border-b border-gray-400'>
                <Image
                    width={400}
                    height={400}
                    src="https://perfumeonline.pk/cdn/shop/files/Perfumeonline_Logo_avi_500x.webp?v=1717415420"
                    alt="Logo"
                    className="p-2 md:p-9 " />
            </div>
            <div className="h-full bg-black text-white flex flex-col md:flex-row justify-between items-start p-4">
                <div className="w-full max-w-lg p-6 rounded-md md:ml-10 ml-1 shadow-lg">
                    <form>
                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-3xl font-medium mb-2">
                                Contact
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full md:w-[670px] text-xl px-3 py-4 rounded-md text-black"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        {/* Country */}
                        <div className="mb-4 mt-12">
                            <label htmlFor="country" className="block text-3xl font-medium mb-2">
                                Delivery
                            </label>
                            <select
                                id="country"
                                className="w-full md:w-[670px] text-xl px-3 py-4 rounded-md text-black"
                                required
                            >
                                <option value="">Select your country</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="India">India</option>
                            </select>
                        </div>

                        <div className='flex gap-4 flex-col md:flex-row'>
                            {/* First Name */}
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="first-name"
                                    className="w-full md:w-[330px] text-xl px-3 py-4 rounded-md text-black"
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>

                            {/* Last Name */}
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="last-name"
                                    className="w-full md:w-[330px] text-xl px-3 py-4 rounded-md text-black"
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mb-4">
                            <input
                                type="text"
                                id="address"
                                className="w-full md:w-[670px] text-xl px-3 py-4 rounded-md text-black"
                                placeholder="Address"
                                required
                            />
                        </div>

                        {/* City */}
                        <div className='flex flex-col md:flex-row gap-4'>
                            {/* City */}
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="city"
                                    className="w-full md:w-[330px] text-xl px-3 py-4 rounded-md text-black"
                                    placeholder="City"
                                    required
                                />
                            </div>

                            {/* Postal Code */}
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="postal-code"
                                    className="w-full md:w-[330px] text-xl px-3 py-4 rounded-md text-black"
                                    placeholder="Postal Code (optional)"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="mb-4">
                            <input
                                type="tel"
                                id="phone"
                                className="w-full md:w-[670px] text-xl px-3 py-4 rounded-md text-black"
                                placeholder="Phone"
                                required
                            />
                        </div>

                        <div className='flex flex-col space-y-4 text-xl'>
                            <h1>Shipping method</h1>
                            <p>If Your Order Amount Above 7k, We Charge 10% In Advance Of Your Order Total. Our Order Confirmation Team Contact To You And Update The Payment Terms & Conditions</p>
                            <button
                                id="email"
                                className="w-full md:w-[670px] mt-3 bg-white text-black text-xl px-3 py-4 rounded-md text-start">
                                Free Delivery
                            </button>
                        </div>

                        {/* Delivery Method */}
                        <div className="mb-4 mt-12">
                            <label htmlFor="delivery-method" className="block text-2xl font-medium mb-4">
                                Payment Method
                            </label>
                            <p>All transactions are secure and encrypted.</p>

                            {/* Bank Deposit */}
                            <div className="w-full md:w-[670px] border border-gray-300 rounded-md p-3 bg-white flex items-center mt-3">
                                <input
                                    type="radio"
                                    name="delivery-method"
                                    value="cash-deposit"
                                    className="mr-3"
                                    required
                                />
                                <label htmlFor="cash-deposit" className="text-black">
                                    Bank Deposit
                                </label>
                            </div>

                            {/* Cash on Delivery */}
                            <div className="w-full md:w-[670px] border border-gray-300 rounded-md p-3 bg-white flex items-center mt-3">
                                <input
                                    type="radio"
                                    name="delivery-method"
                                    value="cash-on-delivery"
                                    className="mr-3"
                                    required
                                />
                                <label htmlFor="cash-on-delivery" className="text-black">
                                    Cash on Delivery
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full md:w-[670px] text-2xl mt-5 text-white py-4 bg-gray-700 rounded-md transition duration-300"
                        >
                            Complete Order
                        </button>
                    </form>
                </div>
                {/* Right side - Cart Items Section */}
                <div className="flex flex-col w-full max-w-sm sm:max-w-md lg:max-w-lg border-l border-gray-300 pl-4 mt-4 sm:mt-0">
                    <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
                    {cartCount > 0 ? (
                        <div className="flex flex-col space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-300 p-4"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={100}
                                        height={100}
                                        className="w-20 h-20 object-cover rounded-md"
                                    />
                                    <div className="flex-1 mt-2 sm:mt-0 sm:ml-4">
                                        <p className="text-lg font-semibold">{item.name}</p>
                                        <p className="text-gray-600 text-sm">Price: ${item.price}</p>
                                        <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 text-sm hover:underline font-bold mt-2 sm:mt-0 sm:ml-auto"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <div className="mt-4 flex justify-between w-72 text-lg font-bold">
                                <p>Total: </p>
                                <p>${getTotalPrice()}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-lg font-semibold">Your cart is empty</p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default CheckoutPage;

