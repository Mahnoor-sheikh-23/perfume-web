import React from 'react';
import "../globals.css";
import Image from 'next/image';
import Link from 'next/link';

function ImageSection() {
  return (
    <div id="something">
      {/* Main Banner */}
      <div>
        <Link href={"/collection/all"}>
          <Image
            alt="Main Banner"
            src="https://perfumeonline.pk/cdn/shop/files/Banner_1920x.webp?v=1704452333"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </Link>
      </div>

      {/* Featured Collections Title */}
      <div className="mt-10 mb-10 text-2xl md:text-4xl flex justify-center">
        <span className="font-bold underline">FEATURED COLLECTIONS</span>
      </div>

      {/* Featured Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {[
          {
            href: "/collection/creed",
            src: "https://perfumeonline.pk/cdn/shop/files/Creed_f173c277-457d-4e0e-8399-cbefcb2d13c9.webp?v=1709038482",
            alt: "Creed",
            label: "CREED",
            items: "15 items",
          },
          {
            href: "/collection/carolina",
            src: "https://perfumeonline.pk/cdn/shop/files/Carolina-Photoroom.webp?v=1709038338",
            alt: "Carolina Herrera",
            label: "CAROLINA HERRERA",
            items: "27 items",
          },
          {
            href: "/collection/cartier",
            src: "https://perfumeonline.pk/cdn/shop/files/Cartier-Photoroom.webp?v=1709038400",
            alt: "Cartier",
            label: "CARTIER",
            items: "22 items",
          },
          {
            href: "/collection/jeanpaul",
            src: "https://perfumeonline.pk/cdn/shop/files/Jean_Paul.webp?v=1709038451",
            alt: "Jean Paul Gaultier",
            label: "JEAN PAUL GAULTIER",
            items: "30 items",
          },
        ].map((item, index) => (
          <div key={index} className="relative group">
            <Link href={item.href}>
              <Image
                width={600}
                height={600}
                src={item.src}
                alt={item.alt}
                className="w-full h-auto cursor-pointer rounded-lg"
              />
            </Link>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100/80 h-20 w-full text-center transition-all duration-500 ease-in-out group-hover:top-full group-hover:-translate-y-full">
              <p className="bg-transparent font-semibold text-lg">
                {item.label}
                <br />
                {item.items}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Width Banner */}
      <div className="my-10 px-6">
        <Link href={"/collection/chanel"}>
          <Image
            alt="Chanel Banner"
            src="https://perfumeonline.pk/cdn/shop/files/Chanel_1920x.webp?v=1709038549"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover rounded-lg"
          />
        </Link>
      </div>

      {/* Additional Collections Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 mb-10">
        {[
          {
            href: "/collection/davidoff",
            src: "https://perfumeonline.pk/cdn/shop/files/DavidOff_400x.webp?v=1709038583",
            alt: "Davidoff",
          },
          {
            href: "/collection/pacorabanne",
            src: "https://perfumeonline.pk/cdn/shop/files/Paco_Rabanne_400x.webp?v=1709038625",
            alt: "Paco Rabanne",
          },
          {
            href: "/collection/boss",
            src: "https://perfumeonline.pk/cdn/shop/files/Hugo_Boss_440d24ad-7e9c-467a-b122-7dc3c277c089_400x.webp?v=1709038666",
            alt: "Hugo Boss",
          },
          {
            href: "/collection/klein",
            src: "https://perfumeonline.pk/cdn/shop/files/Calvin_Klein_400x.webp?v=1709038716",
            alt: "Calvin Klein",
          },
        ].map((item, index) => (
          <div key={index}>
            <Link href={item.href}>
              <Image
                width={400}
                height={400}
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover rounded-lg"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Final Section with Two Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mb-10">
        {[
          {
            href: "/collection/versace",
            src: "https://perfumeonline.pk/cdn/shop/files/Versace_d745d576-1ec9-4917-b297-c8316ff29379_800x.webp?v=1709038847",
            alt: "Versace",
          },
          {
            href: "/collection/christian",
            src: "https://perfumeonline.pk/cdn/shop/files/Christian_Dior_95b272eb-fbce-4c45-b806-be32df01ab79_800x.webp?v=1709038905",
            alt: "Christian Dior",
          },
        ].map((item, index) => (
          <div key={index}>
            <Link href={item.href}>
              <Image
                width={800}
                height={800}
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover rounded-lg"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSection;

