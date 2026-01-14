"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

// Soft glowing orb that floats gently
const GlowingOrb = ({ delay, duration, size, left, top, color }) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: size,
            height: size,
            left: `${left}%`,
            top: `${top}%`,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            filter: "blur(2px)",
        }}
        animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
        }}
        transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    />
);

// Floating particle
const FloatingParticle = ({ delay, duration, size, startX, startY }) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: size,
            height: size,
            left: `${startX}%`,
            top: `${startY}%`,
            background: "rgba(255, 255, 255, 0.6)",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
        }}
        animate={{
            y: [0, -100, -200],
            x: [0, Math.random() * 40 - 20],
            opacity: [0, 1, 0],
            scale: [0, 1, 0.5],
        }}
        transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "easeOut",
        }}
    />
);

// Tiny sparkle star
const Sparkle = ({ delay, x, y, size }) => (
    <motion.div
        className="absolute pointer-events-none"
        style={{ left: `${x}%`, top: `${y}%` }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
        }}
        transition={{
            duration: 2,
            delay: delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 2,
        }}
    >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path
                d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                fill="rgba(255, 255, 255, 0.8)"
            />
        </svg>
    </motion.div>
);

// Floating heart
const FloatingHeart = ({ delay, left, duration }) => (
    <motion.div
        className="absolute text-2xl pointer-events-none opacity-60"
        style={{ left: `${left}%`, bottom: "10%" }}
        animate={{
            y: [0, -200, -400],
            x: [0, 20, -20, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.8],
            rotate: [0, 10, -10, 0],
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

export default function Hero() {
    // Generate animations client-side only
    const [orbs, setOrbs] = useState([]);
    const [particles, setParticles] = useState([]);
    const [sparkles, setSparkles] = useState([]);
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        setOrbs([
            { id: 1, delay: 0, duration: 8, size: 150, left: 10, top: 20, color: "rgba(212, 175, 55, 0.15)" },
            { id: 2, delay: 2, duration: 10, size: 200, left: 80, top: 60, color: "rgba(212, 175, 55, 0.1)" },
            { id: 3, delay: 4, duration: 12, size: 100, left: 60, top: 15, color: "rgba(255, 255, 255, 0.08)" },
            { id: 4, delay: 1, duration: 9, size: 120, left: 25, top: 70, color: "rgba(212, 175, 55, 0.12)" },
            { id: 5, delay: 3, duration: 11, size: 80, left: 85, top: 25, color: "rgba(255, 255, 255, 0.1)" },
        ]);
        setParticles(
            Array.from({ length: 15 }, (_, i) => ({
                id: i,
                delay: Math.random() * 10,
                duration: 6 + Math.random() * 4,
                size: 2 + Math.random() * 3,
                startX: Math.random() * 100,
                startY: 80 + Math.random() * 20,
            }))
        );
        setSparkles(
            Array.from({ length: 12 }, (_, i) => ({
                id: i,
                delay: Math.random() * 5,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: 12 + Math.random() * 12,
            }))
        );
        setHearts(
            Array.from({ length: 4 }, (_, i) => ({
                id: i,
                delay: Math.random() * 12,
                left: 10 + Math.random() * 80,
                duration: 12 + Math.random() * 6,
            }))
        );
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: 'url("/hero-bg-2.jpg")' }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-[1] overflow-hidden">
                {/* Glowing orbs */}
                {orbs.map((orb) => (
                    <GlowingOrb key={`orb-${orb.id}`} {...orb} />
                ))}
                {/* Floating particles */}
                {particles.map((particle) => (
                    <FloatingParticle key={`particle-${particle.id}`} {...particle} />
                ))}
                {/* Sparkles */}
                {sparkles.map((sparkle) => (
                    <Sparkle key={`sparkle-${sparkle.id}`} {...sparkle} />
                ))}
                {/* Floating hearts */}
                {hearts.map((heart) => (
                    <FloatingHeart key={`heart-${heart.id}`} {...heart} />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white/90 text-lg md:text-xl font-medium tracking-widest uppercase mb-4"
                >
                    We Are Getting Married
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-6"
                    style={{
                        textShadow: "0 0 40px rgba(212, 175, 55, 0.3), 0 0 80px rgba(212, 175, 55, 0.1)",
                    }}
                >
                    <motion.span
                        animate={{
                            textShadow: [
                                "0 0 40px rgba(212, 175, 55, 0.3)",
                                "0 0 60px rgba(212, 175, 55, 0.5)",
                                "0 0 40px rgba(212, 175, 55, 0.3)",
                            ],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Kajal & Junaid
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-white/80 text-xl md:text-2xl font-light mb-10"
                >
                    <motion.span
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        February 13, 2026
                    </motion.span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button
                        variant="primary"
                        className="bg-white text-midnight hover:bg-white/90 border-none shadow-lg shadow-white/20 hover:shadow-white/40 transition-shadow"
                        onClick={() => {
                            const rsvpSection = document.getElementById('rsvp');
                            if (rsvpSection) {
                                rsvpSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Save the Date
                    </Button>
                </motion.div>
            </div>

            {/* Decorative corner elements */}
            <motion.div
                className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-white/20 pointer-events-none"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            />
            <motion.div
                className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-white/20 pointer-events-none"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
            />
            <motion.div
                className="absolute bottom-24 left-8 w-20 h-20 border-l-2 border-b-2 border-white/20 pointer-events-none"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, duration: 0.8 }}
            />
            <motion.div
                className="absolute bottom-24 right-8 w-20 h-20 border-r-2 border-b-2 border-white/20 pointer-events-none"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
            />

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-px h-12 bg-white/50"
                />
            </motion.div>
        </section>
    );
}
