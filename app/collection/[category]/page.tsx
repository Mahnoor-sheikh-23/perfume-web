"use client"
import Link from 'next/link';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useCart } from "../../components/CartContext";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

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

const CategoryPage = () => {
    const params = useParams();
    const category = params?.category;
    const { addToCart } = useCart();
    const searchParams = useSearchParams();
    const brand = searchParams.get('brand');
    console.log(brand);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const query = category === "all"
                    ? `*[_type == "post" ${brand ? `&& brand == $brand` : ""}] {
       _id,
       category,
       price1,
       price2,
       imageUrl,
       heading,
       peroff
     }`
                    : `*[_type == "post" && category == $category ${brand ? `&& brand == $brand` : ""}] {
       _id,
       category,
       price1,
       price2,
       imageUrl,
       heading,
       peroff
     }`;

                const fetchedProducts = await client.fetch(query, { category, brand });
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        if (category) fetchProducts();
    }, [brand]);

    // Add to Cart Handler
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

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-t-4 border-customGold rounded-full animate-spin"></div>
        </div>
    }

    return (
        <div>
            <Navbar />
            <div className='h-[55px] text-center p-9  border border-black'>
                <Breadcrumb >
                    <BreadcrumbList >
                        <BreadcrumbItem>
                            <BreadcrumbLink className='text-[18px]   text-black' href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-[18px] text-black" href="/collection">{category} Perfume</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
            <div className='flex flex-col md:flex-row  justify-evenly mt-16 text-gray-700'>
                <div className="md:w-[400px] w-auto h-[1650px] m-2 md:m-0">
                    <div className="w-full md:w-[400px] h-[1650px] border border-black">
                        <div>
                            <p className="text-[20px] p-3 border-b border-black">SHOP BY</p>
                        </div>
                        <div className="mt-6">
                            <div className="ml-4">
                                <p className="text-[26px] p-2 font-bold">Sort by</p>
                                <Select>
                                    <SelectTrigger className="md:w-[360px] w-full">
                                        <SelectValue placeholder="Best Selling" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Alphabetically, A-Z</SelectItem>
                                        <SelectItem value="light">Alphabetically, Z-A</SelectItem>
                                        <SelectItem value="dark">Price, low to high</SelectItem>
                                        <SelectItem value="dark">Price, high to low</SelectItem>
                                        <SelectItem value="system">Date, old to new</SelectItem>
                                        <SelectItem value="system">Date, new to old</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="mt-9 m-2 md:m-4">
                                <p className="text-[26px] p-2 font-bold">Availability</p>
                                <div className="border border-black">
                                    <div className="flex justify-between pb-2 border-b border-black">
                                        <p className="pl-2 text-[20px]">0 Selected</p>
                                        <p className="pr-2 underline text-[20px]">Reset</p>
                                    </div>
                                    <div className="space-y-3 mt-3 mb-3 text-[20px] p-2">
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label className="cursor-pointer text-black">in Stock (807)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label className="text-gray-300 cursor-pointer">out of Stock (0)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-9 m-2 md:m-4">
                                <p className="text-[26px] p-2 font-bold">Price</p>
                                <div className="border border-black">
                                    <div className="flex justify-between pb-2 border-b border-black">
                                        <p className="pl-2 text-[20px]">
                                            The highest price is Rs.200,812.00Default input value is PKR
                                        </p>
                                        <p className="pr-2 underline text-[20px]">Reset</p>
                                    </div>
                                    <div className="space-y-3 mt-3 mb-3 text-[20px] p-2">
                                        <div>
                                            <label>Rs</label>&nbsp;
                                            <input type="text" placeholder="From" />&nbsp;&nbsp;
                                        </div>
                                        <div>
                                            <label>Rs</label>&nbsp;
                                            <input type="text" placeholder="To" />&nbsp;&nbsp;
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-9 m-2 md:m-4">
                                <p className="text-[26px] p-2 font-bold">Fragrance By Type</p>
                                <div className="border border-black">
                                    <div className="flex justify-between pb-2 border-b border-black">
                                        <p className="pl-2 text-[20px]">0 Selected</p>
                                        <p className="pr-2 underline text-[20px]">Reset</p>
                                    </div>
                                    <div className="space-y-3 mt-3 mb-3 text-[20px] p-2">
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Gift Set (816)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Men Fragrances (324)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Unisex Fragrances (65)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Women Fragrances (238)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-9 m-2 md:m-4">
                                <p className="text-[26px] p-2 font-bold">Top Brands</p>
                                <div className="border border-black">
                                    <div className="flex justify-between pb-2 border-b border-black">
                                        <p className="pl-2 text-[20px]">0 selected</p>
                                        <p className="pr-2 underline text-[20px]">Reset</p>
                                    </div>
                                    <div className="space-y-3 overflow-y-auto mt-3 mb-3 h-[400px] text-[20px] p-2">
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Abercrombie & Fitch (14)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Acca Kappa (3)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Al Hambra (13)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Alexandre.J (11)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Amouage (1)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Antonio Banderas (2)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Armaf (19)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Armani (2)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Azzaro (3)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Bentley (4)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Beverly Hills (3)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Britney Spears (2)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Burberry (19)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Calvin Klein (46)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Carolina Herrera (14)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Carrera (2)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Cerruti (2)</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" />&nbsp;
                                            <label>Chairman (1)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:w-[1100px] w-auto'>
                    <div>
                        <div className='flex items-center border text-black mt-[49px] border-gray-200 justify-between'>
                            <p className='text-[20px] p-3'>
                                {typeof category === 'string' && !brand
                                    ? `${category.toUpperCase()} PERFUME`
                                    : brand
                                        ? ` ${brand} PERFUME`
                                        : ''}
                            </p>

                            {/* <p className='mr-2'>Showing {result.length} of {result.length} products</p> */}
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-full'>
                        {products.map((item: Product, index: number) => (
                            <div key={index} className='md:w-full w-auto m-2 md:m-0'>
                                <div className='md:h-[420px] overflow-hidden flex justify-center h-auto md:w-full w-auto border border-gray-200 mt-10'>
                                    <Link href={`/product/${item._id}`}>
                                        <Image
                                            src={item.imageUrl}
                                            alt=""
                                            className='object-cover  overflow-hidden'
                                            width={600}
                                            height={600}
                                        />
                                    </Link>
                                </div>
                                <div className='leading-[2rem] m-4 md:m-0'>
                                    <p className='bg-red-600 w-16 h-7 text-center items-center text-white'>{item.peroff}% off </p>
                                    <p className='text-xl mt-3 '>{item.heading} </p>
                                    <span className='line-through text-xl mt-3 text-red-600 font-bold '>Rs.{item.price1}</span>
                                    <span className='font-bold text-xl mt-3 '>&nbsp; Rs.{item.price2}</span>
                                    <br />
                                    <button onClick={() => handleAddToCart(item)}
                                        className='bg-black hover:bg-customGold text-white font-bold h-10 w-36 mt-5'>ADD TO CART</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default CategoryPage;