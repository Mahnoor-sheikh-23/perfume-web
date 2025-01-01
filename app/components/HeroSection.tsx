"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "../../sanity/lib/client"
import groq from "groq";
import { useCart } from "./CartContext";
import Image from "next/image";

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


function HeroSection() {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    // Fetch products based on gender
    const fetchProducts = async (gender: string) => {
        // Show loading state
        try {
            const query = groq`
        *[_type == "post" && category == $category]{
         _id,
       category,
       price1,
       price2,
       imageUrl,
       heading,
       peroff
        }[0...3] // Limit to 4 items
      `;
            const fetchedProducts = await client.fetch(query, { category: gender });
            setProducts(fetchedProducts);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Handlers to fetch products based on the category
    const showMenPerfumes = () => fetchProducts("men");
    const showWomenPerfumes = () => fetchProducts("women");
    const showFeaturedProducts = () => fetchProducts("unisex");

    useEffect(() => {
        // Default fetch for featured products
        showMenPerfumes()
    }, []);
    const handleAddToCart = (product: Product) => {
        const productToAdd = {
            id: product._id,
            name: product.heading,
            price: product.price2,
            image: product.imageUrl,
            quantity: 1,
        };
        addToCart(productToAdd);
    };


    return (
        <div>
            {/* Header for category selection */}
            <div className="mt-10  overflow-hidden mb-10 text-xl sm:text-2xl md:text-3xl flex flex-wrap justify-center space-x-2 sm:space-x-4">
                <p onClick={showMenPerfumes} className="font-bold cursor-pointer">
                    MEN PERFUMES
                </p>
                <p onClick={showWomenPerfumes} className="font-bold cursor-pointer">
                    &nbsp;/ WOMEN PERFUMES
                </p>
                <p onClick={showFeaturedProducts} className="font-bold cursor-pointer">
                    &nbsp;/ UNISEX PRODUCTS
                </p>
            </div>
            <div className="flex flex-wrap overflow-hidden justify-center gap-7">
                {products.map((product: Product) => (
                    <div
                        key={product._id}
                        className="block w-full sm:w-1/2 lg:w-1/4 h-[500px] sm:h-[550px] md:h-[600px] mt-10"
                    >
                        <Link href={`/product/${product._id}`}>
                            <Image
                                width={600}
                                height={600}
                                src={product.imageUrl}
                                className="w-full h-64 sm:h-72 md:h-80 object-cover"
                                alt=""
                            />
                        </Link>
                        <div className="px-4 sm:ml-5 leading-[1.5rem] sm:leading-[2rem]">
                            <p className="bg-red-600 mt-2 w-14 sm:w-16 h-7 text-center text-white mb-2 text-sm sm:text-base">
                                {product.peroff}%
                            </p>
                            <p className="text-base sm:text-xl">{product.heading}</p>
                            <span className="line-through text-red-600 font-bold text-sm sm:text-lg">
                                RS.{product.price1}
                            </span>
                            <span className="font-bold text-sm sm:text-lg">&nbsp;RS.{product.price2}</span>
                            <br />
                            <button onClick={() => handleAddToCart(product)} className="bg-black text-white font-bold text-sm sm:text-base h-10 w-28 sm:w-36 mt-3 sm:mt-5">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default HeroSection;

