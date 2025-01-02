"use client";
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { notFound, useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/NavBar';
import Counter from '@/app/components/Counter';
import { useCart } from "../../components/CartContext";
import Footer from '@/app/components/Footer';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Product {
    _id: string;
    name: string;
    price1: number;
    heading: string;
    price2: number;
    imageUrl: string;
    peroff: number;
    category: string;
    watching: number;
    sold: number;
    vendor: string;
    SKU: number;
}

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);

    const handleAddToCart = () => {
        if (!product) return; // Ensure product is available
        const productToAdd = {
            id: product._id,
            name: product.heading,
            price: product.price2,
            image: product.imageUrl,
            quantity: 1,
        };
        addToCart(productToAdd);
    };
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const query = groq`
                    *[_type == "post" && _id == $id][0]{
                        _id,
                        heading,
                        SKU,
                        vendor,
                        watching,
                        sold,
                        imageUrl,
                        price1,
                        price2,
                        peroff,
                        
                    }
                `;

                const fetchedProduct = await client.fetch(query, { id });
                if (!fetchedProduct) {
                    notFound();
                } else {
                    setProduct(fetchedProduct);
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-t-4 border-customGold rounded-full animate-spin"></div>
        </div>
            ;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <Navbar />
            <div>
                {/* breadcrumbs */}
                <div className='md:h-[55px] h-auto text-center p-9 border border-black'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className='text-[18px] text-black' href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-[18px] text-black">{product.heading}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className='flex flex-col md:flex-row ml-3 md:ml-9 justify-center gap-9 mt-9'>
                    <div className='md:w-[650px] w-auto md:h-[700px] border border-black'>
                        <img src={product.imageUrl} id="zoom-image" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-150" />
                    </div>

                    {/* Product info */}
                    <div className='md:w-[750px] w-auto md:h-[700px]'>
                        <h1 className='text-black text-[24px] font-semibold'>{product.heading}</h1>
                        <div className='flex justify-between mt-6'>
                            <div className='flex md:gap-10'>
                                <div className="h-[30px] w-[30px] rounded-full bg-[#daa877] animate-glowGold" />
                                <p className='text-[21px]'>{product.watching} watching</p>
                            </div>
                            <p className='text-[21px] pr-2 md:pr-0'>
                                {product.sold} sold in the last hour
                            </p>
                        </div>
                        <div className='flex mt-4 gap-3 text-center items-center'>
                            <p className='md:text-[26px] text-[20px] line-through text-gray-400'>RS.{product.price1}</p>
                            <p className='md:text-[40px] text-[30px] font-semibold text-customGold'>RS.{product.price2}</p>
                            <button className='bg-red-600 w-14 h-7 text-center items-center text-white'>{product.peroff}%</button>
                        </div>

                        {/* Product details */}
                        <div className='md:w-[330px] m-3 md:m-0 w-auto space-y-6 mt-7'>
                            <div className='flex   justify-between'>
                                <p className='text-gray-400 text-[18px]'>Vendor</p>
                                <p className='text-[18px]'>{product.vendor}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-gray-400 text-[18px]'>SKU:</p>
                                <p className='text-[18px]'>{product.SKU}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-gray-400 text-[18px]'>Quantity</p>
                                <Counter />
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className='flex gap-4 mt-7'>
                            <button className='w-[130px] text-white bg-black font-bold h-[67px] hover:text-black hover:bg-customGold'>BUY NOW</button>
                            <button onClick={handleAddToCart} className='h-[67px] w-[170px] border border-customGold hover:bg-customGold font-bold text-[17px] items-center text-customGold hover:text-white'>
                                <i className="fa-solid fa-basket-shopping text-3xl text-customGold hover:text-white"></i> ADD TO CART
                            </button>
                        </div>

                        <div className="space-y-3 mt-7 px-4 sm:px-6 lg:px-8">
                            <h1 className="font-bold text-[20px] text-center sm:text-left sm:text-[22px] lg:text-[24px]">
                                BUYER PROTECTION
                            </h1>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                <i className="fa-regular fa-square-check text-xl sm:text-2xl"></i>
                                <div className="flex flex-col sm:flex-row sm:gap-2">
                                    <span className="font-bold text-[17px] sm:text-[19px]">
                                        Full Refund
                                    </span>
                                    <p className="text-[15px] sm:text-[17px]">
                                        if you don&apos;t receive your order.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 whitespace-normal sm:whitespace-nowrap">
                                <i className="fa-regular fa-square-check text-xl sm:text-2xl"></i>
                                <div className="flex flex-col sm:flex-row sm:gap-2">
                                    <span className="font-bold text-[17px] sm:text-[19px]">
                                        DELIVERY TIME
                                    </span>
                                    <p className="text-[15px] sm:text-[17px]">
                                        , 3 to 5 working days ( Exclude Main Cities )
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;

