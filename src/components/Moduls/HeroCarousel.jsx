import React, { useEffect, useRef, useState } from "react";
import assetsData from "@/lib/data";
import slide1 from "@/assets/poto-hero1.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const HeroCarousel = () => {
  const [api, setApi] = useState(null);
  const intervalRef = useRef(null);
  const AUTOPLAY_MS = 5000;
  useEffect(() => {
    if (!api) return;

    // clear any existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      try {
        api.scrollNext();
      } catch (e) {
        // ignore if API becomes unavailable
      }
    }, AUTOPLAY_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [api]);

  return (
    <>
      <Carousel className="w-full h-screen" setApi={setApi} opts={{ loop: true }}>
        <CarouselContent className="flex items-stretch">
          {assetsData.map((item) => (
            <CarouselItem key={item.id} className="">
              <div className="relative rounded-lg shadow overflow-hidden h-screen">
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" loading="lazy" />

                {/* subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" aria-hidden="true" />

                {/* centered content */}
                <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
                  <div className="text-center">
                    <h3 className="text-white text-3xl sm:text-5xl font-bold drop-shadow-md">{item.title}</h3>
                    <p className="mt-3 text-white text-base sm:text-lg max-w-3xl drop-shadow-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default HeroCarousel;
