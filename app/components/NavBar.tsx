"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useCart } from "./CartContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { client } from "../../sanity/lib/client";
import Image from 'next/image';
import { groq } from 'next-sanity';
import { notFound, useParams } from 'next/navigation';

interface Product {
  _id: string;
  name: string;
  price1: number;
  heading: string;
  price2: number;
  imageUrl: string;
  peroff: number;
  category: string;
  watching:number;
  sold:number;
  vendor:string;
  SKU:number;
}

function Navbar() {
  const { cartItems, cartCount, addToCart, removeFromCart, getTotalPrice } = useCart();
  const { id } = useParams();
  const [products, setProducts] = useState<Product[]>([]); // For all products
  const [currentProduct, setCurrentProduct] = useState<Product>(); // For single product

  // Fetch products and/or specific product
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (id) {
          // Fetch specific product by id
          const productQuery = groq`
            *[_type == "post" && _id == $id][0] {
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
          const fetchedProduct = await client.fetch(productQuery, { id });
          if (!fetchedProduct) {
            notFound();
          } else {
            setCurrentProduct(fetchedProduct);
          }
        } else {
          // Fetch all products
          const allProductsQuery = `*[_type == "post"]{_id, price1, price2, imageUrl, heading, peroff}`;
          const allProducts = await client.fetch(allProductsQuery);
          setProducts(allProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [id]);

  // Handle Add to Cart
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



  if (id && !currentProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className='p-0 m-0'>
      <div className='  text-white'>
        <div className='  bg-black font-thin  text-[12px]  text-center sm:text-1xl md:text-2xl lg:text-4xl p-3 '>
          OUR &nbsp; STANDARDS &nbsp; DELIVERY  &nbsp;TIME &nbsp; IS &nbsp; <b className='text-customGold lg:text-4xl'>3</b> &nbsp; TO &nbsp; <b className='text-orange-300 lg:text-4xl'>5</b> &nbsp; WORKING &nbsp; DAYS
        </div>
        <div className='bg-customGold text-black flex md:hidden items-center  justify-center   text-[19px]  text-center  pl-3 p-3 font-normal'>
          <p>   Wellcome To The House Of Fragnance</p>
        </div>
        <div className='bg-customGold hidden md:flex text-black md:justify-center  text-[12px]  text-center sm:text-sm md:text-sm lg:text-xl p-3 font-normal '>
          Due To Rain, The Order Delivery Is Slightly Delayed. You Will Receive Your Order Within 5 To 7 Working Days.
        </div>
      </div>
      {/* Navbar */}
      <div className="bg-black flex flex-wrap flex-col md:flex-row items-center justify-between p-4 md:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
          width={400}
          height={400}
            src="https://perfumeonline.pk/cdn/shop/files/Perfumeonline_Logo_avi_500x.webp?v=1717415420"
            alt="Logo"
            className="p-2 md:p-4 bg-black "
          />
        </Link>
        {/* Search Bar */}
        <div className="hidden md:flex items-center justify-center w-full md:w-auto md:border-4 border-customGold rounded-xl p-2 my-2 md:my-0 md:flex-row">
          <input
            type="text"
            placeholder="Search Something"
            className="h-[40px] md:h-[50px] w-full md:w-[400px] lg:w-[500px] p-2 rounded-lg focus:outline-none"
          />
          <i className="fa-solid fa-magnifying-glass text-2xl p-2 text-white"></i>
        </div>

        {/* Icons Section */}
        <div className="flex  items-center space-x-6 md:space-x-8 mt-2 md:mt-0">
          <div className="flex mr-3 md:hidden">
            <Sheet>
              <SheetTrigger>
                <i className="fa-solid fa-bars text-white text-2xl"></i>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    <div>
                      <ul>
                        <li className='mt-3 transition-all duration-300 ease-in-out hover:bg-black hover:p-3 hover:mt-0 cursor-pointer'>
                          <Link href={"/collection/all"}>
                            ALL PERFUME
                          </Link></li>
                        <li className='mt-3 transition-all duration-300 ease-in-out hover:bg-black hover:p-3 hover:mt-0 cursor-pointer'>
                          <Link href={"/collection/men"}>
                            MEN
                          </Link></li>
                        <li className='mt-3 transition-all duration-300 ease-in-out hover:bg-black hover:p-3 hover:mt-0 cursor-pointer'>
                          <Link href={"/collection/women"}>
                            WOMEN
                          </Link></li>
                        <li className='mt-3 transition-all duration-300 ease-in-out hover:bg-black hover:p-3 hover:mt-0 cursor-pointer'>
                          <Link href={"/collection/unisex"}>
                            UNISEX
                          </Link></li>
                        <li className='mt-3 transition-all duration-300 ease-in-out hover:bg-black hover:p-3 hover:mt-0 cursor-pointer'>
                          <Link href={"/collection/giftset"}>
                            GIFTSET
                          </Link></li>
                       
                      </ul>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          {/* Account Dialog */}
          <div className="flex flex-col items-center">
            <Dialog>
              <DialogTrigger className='md:mt-4 mt-2'>
                <i className="fa-solid fa-user text-customGold text-2xl md:text-3xl"></i>
                <p className="text-white text-xs md:text-base mt-1">My Account</p>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="space-y-6">
                  <DialogTitle className="text-center text-[25px] mb-4">LOGIN</DialogTitle>
                  <DialogDescription>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full md:w-[420px] rounded-none p-2 items-center h-[40px] border border-black"
                    />
                  </DialogDescription>
                  <DialogDescription>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full md:w-[420px] rounded-none p-2 items-center h-[40px] border border-black"
                    />
                  </DialogDescription>
                  <DialogDescription>
                    <button className="w-full md:w-[420px] rounded-none p-2 items-center h-[40px] bg-customGold text-white">
                      SIGN IN
                    </button>
                  </DialogDescription>
                  <DialogDescription className="flex justify-between">
                    <p className="text-black text-[18px] cursor-pointer">Forgot Password</p>
                    <p className="text-black text-[18px] cursor-pointer">Create Account</p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          {/* Shopping Cart */}
          <div className="flex flex-col items-center">
            <Sheet >
              <SheetTrigger>
                <div className="relative">
                  <i className="fa-solid fa-basket-shopping text-customGold text-2xl md:text-3xl p-2"></i>
                  <span className="absolute top-1 right-3 md:top-3 md:right-5 bg-gray-600 text-white text-xs rounded-full px-1">
                    {cartCount}
                  </span>
                </div>
                <p className="text-white text-xs md:text-base mt-1">Shopping Cart</p>
              </SheetTrigger>
              <SheetContent className=' overflow-y-auto '>
                <SheetHeader>
                  <SheetTitle className=" text-[19px] font-bold">
                    Your Cart
                  </SheetTitle>
                  <SheetDescription>
                    {cartCount > 0 ? "Items in your cart" : "Your Cart Is Currently Empty"}
                  </SheetDescription>
                </SheetHeader>
                {cartCount > 0 ? (
                  <div className="flex flex-col">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-300 p-4"
                      >
                        <Image
                        height={80}
                        width={80}
                          src={item.image}
                          alt={item.name}
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
                    <div className="mt-4  flex justify-between w-auto md:w-72 text-lg font-bold">
                      <p>Total: </p>
                      <p>${getTotalPrice()} </p>
                    </div>
                    <div className='mt-3'>
                      <Link href={"/checkout"}>
                        <button className='md:w-[300px] w-[200px]  h-[40px] font-bold hover:bg-customGold bg-black text-white rounded-2xl '>CHECK OUT</button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <p></p>
                )}
              </SheetContent>
            </Sheet>
          </div>
          )

        </div>
      </div>
      {/* Menu */}
      <div className='xs:flex hidden bg-customGold relative'>
        <ul className='flex   xs:space-x-10 xs:text-2xl  text-white'>
          {/* Brands List with Dropdown */}
          <li className='ml-10 w-auto relative group bg-black p-3 mb-0 mt-0 cursor-pointer'>
            <div className="group">
              BRANDS
              {/* Hidden Dropdown for Brands */}
              <div className='absolute left-0 top-full mt-0 border border-black hidden group-hover:block hover:block bg-white text-black w-[200vh] h-auto z-50 shadow-lg transition-all duration-300 ease-in-out'>
                <div className='flex space-x-9 xs:space-x-44'>
                  <ul className='py-2 block pl-6 text-lg  '>
                    <li><h1 className='text-3xl font-bold m-2'>A-C</h1></li>
                    <li className='p-2  hover:text-orange-300'><a href="#gucci">Abercrombie & Fitch</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#chanel">Acca Kappa</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#dior">Acqua Di Parma</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#versace">Adidas</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Agent Provocateur</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Azzaro</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Baldessarini</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Bently</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Beyonce</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Beverly Hills</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Britney Spears</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Bvlgari</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Calvin Klein</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Carolina Herrera</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Cacharel</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Cartier</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Carven</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Cerruti</a></li>

                    {/* Add more brands as needed */}
                  </ul>
                  <ul className='py-2 block pl-6 text-lg  '>
                    <li><h1 className='text-3xl font-bold m-2'>C-H</h1></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Diesel</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Diptyque</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">DKNY</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Dsquared²</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Ducati</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Dunhill</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Elie Saab</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Elizabeth Arden</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Elizabeth Taylor</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">English Blazer</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Escada</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Estee Lauder</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">FA&apos;RA</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Fabbrica Della Musa</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Ferrari</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Frederic Malle</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Geoffrey Beene</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Givenchy</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Gucci</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Guerlain</a></li>


                    {/* Add more brands as needed */}
                  </ul>
                  <ul className='py-2 block pl-6 text-lg  '>
                    <li><h1 className='text-3xl font-bold m-2'>H-M</h1></li>
                    <li className='p-2  hover:text-orange-300'><a href="#gucci"> Hermes</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#chanel">Hugo Boss</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#dior">Hummer</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#versace">Ice Berg</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Jimmy Choo</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Jo Malone</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">John Varvatos</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Joop</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Jovan Musk</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Juicy Couture</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Kayali</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Kenneth Cole</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Kenzo</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Khadlaj</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Kilian</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Kohasaa</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry"> Lalique</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry"> Lamborghini</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry"> Lanvin</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry"> Lattafa</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry"> Le Vogue</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry"> Liu Jo</a></li>

                    {/* Add more brands as needed */}
                  </ul>
                  <ul className='py-2 block pl-6 text-lg  '>
                    <li><h1 className='text-3xl font-bold m-2'>M-R</h1></li>
                    <li className='p-2  hover:text-orange-300'><a href="#gucci">Gucci</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#chanel">Chanel</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#dior">Dior</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#versace">Versace</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>

                    {/* Add more brands as needed */}
                  </ul>
                  <ul className='py-2 block pl-6 text-lg  '>
                    <li><h1 className='text-3xl font-bold m-2'>R-Z</h1></li>
                    <li className='p-2  hover:text-orange-300'><a href="#gucci">Gucci</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#chanel">Chanel</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#dior">Dior</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#versace">Versace</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>
                    <li className='p-2 hover:text-orange-300'><a href="#burberry">Burberry</a></li>

                    {/* Add more brands as needed */}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* Other Menu Items */}
          <li className='mt-3 transition-all duration-300 ease-in-out hover:bg-black hover:p-3 hover:mt-0 cursor-pointer'>
            <div className='group'>
              NEW ARRIVALS
              {/* hidden dropdown for new arrivals  */}
              <div className='absolute md:left-10 top-full mt-0 border border-black hidden group-hover:block hover:block bg-white text-black w-[20vh] md:w-[196vh] h-auto z-50 shadow-lg transition-all duration-300 ease-in-out'>
                <div className='flex'>
                  {
                    products?.slice(0, 4).map((item: Product, index: number) => {
                      return (
                        <div key={index} className='block md:h-[600px] w-auto md:w-96 mt-16'>
                          <Link href={`/product/${item._id}/`}>
                            <Image alt="" src={item.imageUrl} height={100} width={300} />
                          </Link>
                          <div className='ml-5 leading-[2.5rem]'>
                            <p className='bg-red-500 md:w-28 h-9 pl-2 text-white mb-2'>{item.peroff}% off</p>
                            <p>{item.heading}</p>
                            <strong>{item.price1}</strong>
                            <p>{item.price2}</p>
                            <button onClick={() => handleAddToCart(item)} className='bg-black text-white p-2'>Add To Cart</button>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </div>
          </li>
          <li className='mt-3 transition-all duration-300 ease-in-out hover:bg-black hover:p-3 hover:mt-0 cursor-pointer'>
            <Link href={"/collection/all"}>
              ALL PERFUME
            </Link></li>
          <li className='mt-3 transition-all duration-300 ease-in-out hover:bg-black hover:p-3 hover:mt-0 cursor-pointer'>
            <Link href={"/collection/men"}>
              MEN
            </Link></li>
          <li className='mt-3 transition-all duration-300 ease-in-out hover:bg-black hover:p-3 hover:mt-0 cursor-pointer'>
            <Link href={`/collection/women`}>
              WOMEN
            </Link></li>
          <li className='mt-3 transition-all duration-300 ease-in-out hover:bg-black hover:p-3 hover:mt-0 cursor-pointer'>
            <Link href={`/collection/unisex`}>
              UNISEX
            </Link></li>
          <li className='mt-3 transition-all duration-300 ease-in-out hover:bg-black hover:p-3 hover:mt-0 cursor-pointer'>
            <Link href={`/collection/giftset`}>
              GIFTSET
            </Link></li>
        </ul>
      </div>
    </div >
  )
}

export default Navbar;




