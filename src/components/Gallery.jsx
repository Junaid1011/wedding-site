"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { useAnimations, BackgroundAnimations } from "@/components/ui/Animations";

const images = [
    { src: "/Pic1.jpeg", alt: "Couple Photo 1", className: "md:col-span-2 md:row-span-2", imgClass: "object-top" },
    { src: "/gallery-2.jpg", alt: "Couple Photo 2", className: "md:col-span-1 md:row-span-1", imgClass: "object-[50%_25%]" },
    { src: "/gallery-3.jpg", alt: "Couple Photo 3", className: "md:col-span-1 md:row-span-1", imgClass: "object-center" },
    { src: "/Pic2.jpeg", alt: "Couple Photo 4", className: "md:col-span-1 md:row-span-1", imgClass: "object-top" },
    { src: "/Pic4.jpeg", alt: "Couple Photo 5", className: "md:col-span-1 md:row-span-2", imgClass: "object-center" },
    { src: "/gallery-6.jpg", alt: "Couple Photo 6", className: "md:col-span-1 md:row-span-1", imgClass: "object-center" },
];

export default function Gallery() {
    const { bubbles, sparkles, hearts, glowParticles } = useAnimations({
        bubbleCount: 10,
        sparkleCount: 8,
        heartCount: 4,
        glowCount: 5
    });

    return (
        <Section id="gallery" className="bg-midnight overflow-hidden relative">
            {/* Background animations */}
            <BackgroundAnimations
                bubbles={bubbles}
                sparkles={sparkles}
                hearts={hearts}
                glowParticles={glowParticles}
            />

            <div className="text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif text-white mb-4"
                >
                    Captured Moments
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 bg-rose-gold mx-auto rounded-full mb-4"
                />
                <p className="text-white/60">A glimpse into our journey together.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto auto-rows-[300px] relative z-10">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                        className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-rose-gold/20 transition-all duration-300 ${image.className}`}
                    >
                        {/* Gradient overlay on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
                        />
                        <img
                            src={image.src}
                            alt={image.alt}
                            className={`w-full h-full object-cover hover:scale-110 transition-transform duration-700 ${image.imgClass}`}
                        />
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 ring-2 ring-rose-gold/0 hover:ring-rose-gold/50 rounded-xl transition-all duration-300" />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
