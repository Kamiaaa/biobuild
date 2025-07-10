'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Brand {
  name: string;
  logo: string;
  image: string;
  alt: string;
}

const CuratedCollaborations: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const brands: Brand[] = [
    {
      name: 'Roberto Cavalli',
      logo: 'https://images.ctfassets.net/zoq5l15g49wj/5G97naPV1OSu07cfaOHoHP/056ec9cf1a87ad56ba990c1634cc3010/Roberto_Cavalli_logo.svg',
      image: 'https://images.ctfassets.net/zoq5l15g49wj/66lP4jC7HheXyqj7QftNGd/a1af333272ffa967396de5eddd7ad24b/Collab-Modal-Cavalli-2_1.webp',
      alt: 'Roberto Cavalli',
    },
    {
      name: 'Mandarin Oriental',
      logo: 'https://images.ctfassets.net/zoq5l15g49wj/73iWiVpmZkL2fjd8j3KbbF/035aa32e1069d84074fffd9f1b7468de/image_1.svg',
      image: 'https://images.ctfassets.net/zoq5l15g49wj/1aMQrMjZ1kIu91G9M6rLGQ/1de809d83f369096c21f8ad0c5056766/653941242-mandarin-oriental-1_1.webp',
      alt: 'Mandarin Oriental',
    },
    {
      name: 'Versace',
      logo: 'https://images.ctfassets.net/zoq5l15g49wj/2oCT4NuESJvfqFfAofowZg/c986db5a0f5130e6aaf2c5767a012742/Logo_-_Versace_-_Black.svg',
      image: 'https://images.ctfassets.net/zoq5l15g49wj/44X75zXAwCwcU8HHKudHEa/f3f536b23df315303cd6dca88f4ebf1e/d9906142d40384fe4f1513d069f2dd55',
      alt: 'Versace',
    },
    {
      name: 'De Grisogono',
      logo: 'https://images.ctfassets.net/zoq5l15g49wj/6EdSNmn0ZPDkJdc3dZaHea/1180d948e9041adea0fa7c523ca864ba/De_Grisogono.svg',
      image: 'https://images.ctfassets.net/zoq5l15g49wj/3S0NHgQToWVzu2rmcit8xI/d47f74d61cf69e98bd1fb48ad3348319/647994200-4x3-gallery-9.webp',
      alt: 'de grisogno',
    },
    {
      name: 'Paramount',
      logo: 'https://images.ctfassets.net/zoq5l15g49wj/5Nze1OoDneE04uIufMlxa8/f9de484e3c72e39049b0a5d9a74cf7c5/Logo_-_Paramount_-_Black.svg',
      image: 'https://images.ctfassets.net/zoq5l15g49wj/mrAHZqugkW8KC8Zth50n3/7aa058cf89138bd3dc07d805a4a28bc6/Paramount_1.webp',
      alt: 'paramount hotels',
    },
    {
      name: 'Trump',
      logo: 'https://images.ctfassets.net/zoq5l15g49wj/mm2i4fDEdT8ZERRS4uKns/369eae22d7816249a8d1c895c9feb17a/Logo_-_Trump_-_Black.svg',
      image: 'https://images.ctfassets.net/zoq5l15g49wj/1QZOsSUFtXsfDTCxxYZU5m/4a0f137ced7c007b290aa69bb5d763f7/653941279-trump-1_1.webp',
      alt: 'Trump',
    },
    {
      name: 'Radisson',
      logo: 'https://images.ctfassets.net/zoq5l15g49wj/157svR61vvmlPzxxmmYgFd/52c9a7b44a23c70930879cd80288051f/Logo_-_Radisson_-_Black.svg',
      image: 'https://images.ctfassets.net/zoq5l15g49wj/2roAixshKYxBjH5UPG7AfM/c39fd8652986e587a090166a78760aaa/653941248-radisson-1.webp',
      alt: 'radisson',
    },
    {
      name: 'Rotana',
      logo: 'https://images.ctfassets.net/zoq5l15g49wj/6ehdwruVqEi3VNnbh05Laa/3f31842664604bb0bc0b3bcf5827623d/Logo_-_Rotana_-_Black.svg',
      image: 'https://images.ctfassets.net/zoq5l15g49wj/2LjSXgwG1hWfxAlN1sJVMs/c9edab29879697dcac0ad294549ae11a/Rotana.webp',
      alt: 'rotana',
    },
    {
      name: 'Roberto Cavalli',
      logo: 'https://images.ctfassets.net/zoq5l15g49wj/5G97naPV1OSu07cfaOHoHP/056ec9cf1a87ad56ba990c1634cc3010/Roberto_Cavalli_logo.svg',
      image: 'https://images.ctfassets.net/zoq5l15g49wj/66lP4jC7HheXyqj7QftNGd/a1af333272ffa967396de5eddd7ad24b/Collab-Modal-Cavalli-2_1.webp',
      alt: 'Roberto Cavalli',
    },
    {
      name: 'Mandarin Oriental',
      logo: 'https://images.ctfassets.net/zoq5l15g49wj/73iWiVpmZkL2fjd8j3KbbF/035aa32e1069d84074fffd9f1b7468de/image_1.svg',
      image: 'https://images.ctfassets.net/zoq5l15g49wj/1aMQrMjZ1kIu91G9M6rLGQ/1de809d83f369096c21f8ad0c5056766/653941242-mandarin-oriental-1_1.webp',
      alt: 'Mandarin Oriental',
    },
    {
      name: 'Versace',
      logo: 'https://images.ctfassets.net/zoq5l15g49wj/2oCT4NuESJvfqFfAofowZg/c986db5a0f5130e6aaf2c5767a012742/Logo_-_Versace_-_Black.svg',
      image: 'https://images.ctfassets.net/zoq5l15g49wj/44X75zXAwCwcU8HHKudHEa/f3f536b23df315303cd6dca88f4ebf1e/d9906142d40384fe4f1513d069f2dd55',
      alt: 'Versace',
    },
    {
      name: 'De Grisogono',
      logo: 'https://images.ctfassets.net/zoq5l15g49wj/6EdSNmn0ZPDkJdc3dZaHea/1180d948e9041adea0fa7c523ca864ba/De_Grisogono.svg',
      image: 'https://images.ctfassets.net/zoq5l15g49wj/3S0NHgQToWVzu2rmcit8xI/d47f74d61cf69e98bd1fb48ad3348319/647994200-4x3-gallery-9.webp',
      alt: 'de grisogno',
    },
  ];

  return (
    <div ref={sectionRef} className="w-full mx-auto relative md:pt-20 md:min-h-screen">
      {/* Section Header */}
      <div className="text-center font-primary pt-20 px-4">
        <h2 className="tracking-wider uppercase text-base md:text-xl leading-5">
          A new realm of curated collaborations
        </h2>
        <p className="text-base font-light pt-6 pb-4 leading-6">
          DAMAC has worked closely with some of the world's most sought-after purveyors of luxury to create truly exquisite environments
        </p>
      </div>

      {/* ✅ Desktop View */}
      <div className="hidden md:grid md:grid-cols-4 gap-6 px-6 pt-10">
        {brands.map((brand, index) => {
          const isEffected = index % 4 === 0 || index % 4 === 2;
          const offsetY = isVisible && isEffected ? 70 : 0;

          return (
            <button
              key={index}
              className="w-full"
              style={{
                transform: `translateY(${offsetY}px)`,
                transition: 'transform 0.4s ease',
              }}
            >
              <div className="w-full relative aspect-[3/4] rounded-md overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute mx-auto left-1/2 -translate-x-1/2 bottom-6">
                  <Image
                    src={brand.logo}
                    alt={brand.alt}
                    width={100}
                    height={80}
                    className="filter invert"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ✅ Mobile View: horizontal scroll */}
      <div className="md:hidden px-4 pt-10 overflow-x-auto whitespace-nowrap space-x-4 flex snap-x">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-64 aspect-[3/4] rounded-md overflow-hidden snap-start"
          >
            <Image
              src={brand.image}
              alt={brand.alt}
              fill
              className="object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute mx-auto left-1/2 -translate-x-1/2 bottom-6">
              <Image
                src={brand.logo}
                alt={brand.alt}
                width={80}
                height={60}
                className="filter invert"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuratedCollaborations;
