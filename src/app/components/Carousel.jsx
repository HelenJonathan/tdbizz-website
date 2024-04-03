"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla mx-auto max-w-screen">
      <div className="embla__viewport h-76" ref={emblaRef}>
        <div className="embla__container flex h-full">
          <div className="embla__slide  items-center justify-center">
            <Image
              src="/Testimonial.jpg"
              width="400"
              height="300"
              alt="Testimonials"
            />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image
              src="/Testimonial.jpg"
              width="400"
              height="300"
              alt="Testimonials"
            />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image
              src="/Testimonial.jpg"
              width="400"
              height="300"
              alt="Testimonials"
            />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image
              src="/Testimonial.jpg"
              width="400"
              height="300"
              alt="Testimonials"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
