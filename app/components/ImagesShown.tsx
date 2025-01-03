"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import groq from "groq";
import { useCart } from "./CartContext";

interface Product {
  _id: string;
  name: string;
  price1: number;
  heading: string;
  price2: number;
  imageUrl: string;
  peroff: number;
  category: string;
}

// Helper function to chunk the array
const chunkArray = (array: Product[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const ImagesShown = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = groq`
        *[_type == "post" && category == "women"]{
          _id,
          category,
          price1,
          price2,
          imageUrl,
          heading,
          peroff
        }[0...12]  // Fetch more products for multiple slides
        `;
        const fetchedProducts = await client.fetch(query);
        setProduct(fetchedProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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

  // Divide products into chunks (e.g., 4 items per slide)
  const productChunks = chunkArray(product, 4);

  return (
    <div>
      <div className="space-x-8 ml-9 mr-9 mb-9 overflow-hidden">
        <Link href={"/collection/tomford"}>
          <Image
            alt=""
            width={1000}
            height={1000}
            className="w-screen h-auto md:h-screen object-fill object-center overflow-hidden aspect-auto z-0"
            src={
              "https://perfumeonline.pk/cdn/shop/files/Tom_Ford_3dd2e5b0-2e88-4eef-aaa7-36ab89bb974d_1920x.webp?v=1709038958"
            }
          />
        </Link>
      </div>

      {/* Carousel */}
      <div className="mt-20">
      <div className="mt-10 mb-10 text-2xl md:text-4xl flex justify-center">
        <span className="font-bold underline">WOMEN PERFUME</span>
      </div>
        <Carousel>
          <CarouselContent>
            {productChunks.map((chunk, chunkIndex) => (
              <CarouselItem
                key={chunkIndex}
                className="flex w-[400px] gap-3 flex-col md:flex-row  justify-evenly"
              >
                {chunk.map((item: Product) => (
                  <div key={item._id} >
                    <div className="h-[400px] md:w-[350px] overflow-hidden flex justify-center  mt-10">
                      <Link href={`/product/${item._id}`}>
                        <Image
                          width={400}
                          height={400}
                          src={item.imageUrl} // Generate the image URL
                          alt="Sanity Image"
                          
                        />
                      </Link>
                    </div>
                    <div className="leading-[2rem] m-6 md:m-4">
                      <p className="bg-red-600 w-16 h-7 text-center items-center text-white">
                        {item.peroff}% off
                      </p>
                      <p className="text-xl mt-3">{item.heading}</p>
                      <span className="line-through text-xl mt-3 text-red-600 font-bold">
                        Rs.{item.price1}
                      </span>
                      <span className="font-bold text-xl mt-3">
                        &nbsp; Rs.{item.price2}
                      </span>
                      <br />
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-black hover:bg-customGold text-white font-bold h-10 w-36 mt-5"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                ))}
              </CarouselItem>
            ))}
           
          </CarouselContent>

          {/* Carousel Controls */}
          <CarouselPrevious className="bg-gray-800 z-10 text-white rounded-full p-2 hover:bg-gray-600" />
          <CarouselNext className="bg-gray-800 z-10  text-white rounded-full p-2 hover:bg-gray-600" />
        </Carousel>
      </div>
    </div>
  );
};

export default ImagesShown;

