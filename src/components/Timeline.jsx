"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const story = [
    {
        year: "2010",
        title: "First Met",
        description: "We met in June 2010 in 7th grade at school. What started as a simple friendship became something special. Sitting behind each other during exams, our bond slowly grew stronger. That year became one of the most beautiful beginnings of our story."
    },
    {
        year: "2015",
        title: "Best Friends",
        description: "From 2010 to 2015, we shared an unbreakable friendship. We stood by each other through school days, laughter, and memories, never realizing that our friendship was quietly laying the foundation for something much deeper."
    },
    {
        year: "2018",
        title: "Growing Closer",
        description: "2018 was the year we truly began to understand each other. We cared more, shared more, and slowly grew closer. What felt natural and effortless slowly turned into something meaningful and special."
    },
    {
        year: "2019",
        title: "The First Confession",
        description: "In November 2019, we finally confessed our love to each other. What had been felt in silence for years was finally spoken aloud. That moment marked the beginning of our beautiful relationship."
    },
    {
        year: "2023",
        title: "Families United",
        description: "2023 was a turning point in our journey. After challenges and patience, our families finally came together and blessed our love, making our dream of forever feel real."
    },
    {
        year: "2025",
        title: "Engagement",
        description: "In 2025, we celebrated our engagement — a promise made official, a love celebrated, and the start of a lifetime together."
    },
    {
        year: "2026",
        title: "Forever Begins",
        description: "In 2026, we will celebrate the beginning of our forever. What started as a childhood friendship will turn into a lifetime promise as we say our vows and choose each other for every tomorrow."
    }
];

// Floating Bubble component
const Bubble = ({ delay, duration, size, left, swayX1, swayX2 }) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: size,
            height: size,
            left: `${left}%`,
            bottom: -20,
            background: `radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.6), rgba(212, 175, 55, 0.1))`,
            boxShadow: `0 0 ${size / 2}px rgba(212, 175, 55, 0.3), inset 0 0 ${size / 4}px rgba(255, 255, 255, 0.2)`,
        }}
        initial={{ y: 0, opacity: 0, scale: 0 }}
        animate={{
            y: -1200,
            opacity: [0, 0.7, 0.7, 0],
            scale: [0, 1, 1, 0.5],
            x: [0, swayX1, swayX2],
        }}
        transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "easeOut",
        }}
    />
);

// Sparkle component
const Sparkle = ({ delay, x, y, repeatDelay }) => (
    <motion.div
        className="absolute pointer-events-none"
        style={{ left: `${x}%`, top: `${y}%` }}
        initial={{ scale: 0, rotate: 0 }}
        animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
        }}
        transition={{
            duration: 2.5,
            delay: delay,
            repeat: Infinity,
            repeatDelay: repeatDelay,
        }}
    >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
                d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                fill="rgba(212, 175, 55, 0.7)"
            />
        </svg>
    </motion.div>
);

// Floating Heart component
const FloatingHeart = ({ delay, left, duration }) => (
    <motion.div
        className="absolute text-2xl pointer-events-none"
        style={{ left: `${left}%`, bottom: 0 }}
        initial={{ y: 0, opacity: 0 }}
        animate={{
            y: -1000,
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.5, 1, 1, 0.6],
            rotate: [0, 15, -15, 0],
        }}
        transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "easeOut",
        }}
    >
        💕
    </motion.div>
);

// Glowing particle component
const GlowParticle = ({ delay, x, y, size }) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: size,
            height: size,
            left: `${x}%`,
            top: `${y}%`,
            background: `radial-gradient(circle, rgba(212, 175, 55, 0.8), transparent)`,
        }}
        animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
        }}
        transition={{
            duration: 3,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    />
);

export default function Timeline() {
    // Generate random animations only on client side to avoid hydration mismatch
    const [bubbles, setBubbles] = useState([]);
    const [sparkles, setSparkles] = useState([]);
    const [hearts, setHearts] = useState([]);
    const [glowParticles, setGlowParticles] = useState([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setBubbles(
            Array.from({ length: 15 }, (_, i) => ({
                id: i,
                delay: Math.random() * 8,
                duration: 8 + Math.random() * 6,
                size: 8 + Math.random() * 20,
                left: Math.random() * 100,
                swayX1: Math.random() * 30 - 15,
                swayX2: Math.random() * 50 - 25,
            }))
        );
        setSparkles(
            Array.from({ length: 12 }, (_, i) => ({
                id: i,
                delay: Math.random() * 5,
                x: Math.random() * 100,
                y: Math.random() * 100,
                repeatDelay: Math.random() * 4,
            }))
        );
        setHearts(
            Array.from({ length: 6 }, (_, i) => ({
                id: i,
                delay: Math.random() * 10,
                left: Math.random() * 100,
                duration: 10 + Math.random() * 5,
            }))
        );
        setGlowParticles(
            Array.from({ length: 8 }, (_, i) => ({
                id: i,
                delay: Math.random() * 3,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: 4 + Math.random() * 8,
            }))
        );
    }, []);

    return (
        <Section id="story" className="bg-midnight overflow-hidden relative">
            {/* Background animations */}
            {bubbles.map((bubble) => (
                <Bubble key={`bubble-${bubble.id}`} {...bubble} />
            ))}
            {sparkles.map((sparkle) => (
                <Sparkle key={`sparkle-${sparkle.id}`} {...sparkle} />
            ))}
            {hearts.map((heart) => (
                <FloatingHeart key={`heart-${heart.id}`} {...heart} />
            ))}
            {glowParticles.map((particle) => (
                <GlowParticle key={`glow-${particle.id}`} {...particle} />
            ))}

            <div className="text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif text-white mb-4"
                >
                    Our Love Story
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 bg-rose-gold mx-auto rounded-full"
                />
            </div>

            <div className="relative container mx-auto max-w-4xl z-10">
                {/* Animated Vertical Line */}
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-rose-gold via-rose-gold/50 to-rose-gold/30 -translate-x-1/2"
                    style={{ boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)" }}
                />

                <div className="space-y-12">
                    {story.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Glowing Timeline Dot */}
                            <motion.div
                                className="absolute left-4 md:left-1/2 w-4 h-4 bg-rose-gold rounded-full -translate-x-1/2 mt-6 border-4 border-midnight z-10"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                                style={{
                                    boxShadow: "0 0 15px rgba(212, 175, 55, 0.8), 0 0 30px rgba(212, 175, 55, 0.4)"
                                }}
                            >
                                {/* Pulsing ring effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-rose-gold/30"
                                    animate={{
                                        scale: [1, 2, 2.5],
                                        opacity: [0.6, 0.3, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.3,
                                    }}
                                />
                            </motion.div>

                            {/* Content */}
                            <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className={`text-left ${index % 2 === 0 ? "md:text-left" : "md:text-right"} backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300`}>
                                        <motion.span
                                            className="text-rose-gold font-serif text-xl font-bold block mb-2"
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 + 0.2 }}
                                        >
                                            {item.year}
                                        </motion.span>
                                        <motion.h3
                                            className="text-2xl font-serif text-white mb-3"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 + 0.3 }}
                                        >
                                            {item.title}
                                        </motion.h3>
                                        <motion.p
                                            className="text-white/70 leading-relaxed"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 + 0.4 }}
                                        >
                                            {item.description}
                                        </motion.p>
                                    </Card>
                                </motion.div>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
