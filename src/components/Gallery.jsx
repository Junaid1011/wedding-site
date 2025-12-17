"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const images = [
    { src: "/WhatsApp Image 2025-12-17 at 11.40.17 AM.jpeg", alt: "Couple Photo 1", className: "md:col-span-2 md:row-span-2", imgClass: "object-top" },
    { src: "/gallery-2.jpg", alt: "Couple Photo 2", className: "md:col-span-1 md:row-span-1", imgClass: "object-[50%_25%]" },
    { src: "/gallery-3.jpg", alt: "Couple Photo 3", className: "md:col-span-1 md:row-span-1", imgClass: "object-center" },
    { src: "/WhatsApp Image 2025-12-17 at 11.40.28 AM.jpeg", alt: "Couple Photo 4", className: "md:col-span-1 md:row-span-1", imgClass: "object-top" },
    { src: "/WhatsApp Image 2025-12-17 at 11.40.36 AM.jpeg", alt: "Couple Photo 5", className: "md:col-span-1 md:row-span-2", imgClass: "object-center" },
    { src: "/gallery-6.jpg", alt: "Couple Photo 6", className: "md:col-span-1 md:row-span-1", imgClass: "object-center" },
];

export default function Gallery() {
    return (
        <Section id="gallery" className="bg-midnight">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif text-white mb-4"
                >
                    Captured Moments
                </motion.h2>
                <p className="text-white/60">A glimpse into our journey together.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto auto-rows-[300px]">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ${image.className}`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className={`w-full h-full object-cover hover:scale-105 transition-transform duration-700 ${image.imgClass}`}
                        />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
