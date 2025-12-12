import React from "react";
interface HeroSectionProps {
  headline: string;
  sub?: string;
  cta_text?: string;
  image_url?: string | null;
}
export default function HeroSection({ headline, sub, cta_text, image_url }: HeroSectionProps) {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        {image_url && (
          <img
            src={image_url}
            alt="A team working together on a project"
            className="w-full h-full object-cover"
            width="1440"
            height="960"
            loading="eager"
            decoding="async"
          />
        )}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-48 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          {headline}
        </h1>
        {sub && (
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
            {sub}
          </p>
        )}
        {cta_text && (
          <div className="mt-10">
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white font-bold py-3 px-8 rounded-md text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              {cta_text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
