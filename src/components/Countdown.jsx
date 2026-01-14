"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";

// Bubble component for celebration animation
const Bubble = ({ delay, duration, size, left, swayX1, swayX2 }) => (
    <motion.div
        className="absolute rounded-full"
        style={{
            width: size,
            height: size,
            left: `${left}%`,
            bottom: -20,
            background: `radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.8), rgba(212, 175, 55, 0.2))`,
            boxShadow: `0 0 ${size / 2}px rgba(212, 175, 55, 0.5), inset 0 0 ${size / 4}px rgba(255, 255, 255, 0.3)`,
        }}
        initial={{ y: 0, opacity: 0, scale: 0 }}
        animate={{
            y: -800,
            opacity: [0, 1, 1, 0],
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
        className="absolute"
        style={{ left: `${x}%`, top: `${y}%` }}
        initial={{ scale: 0, rotate: 0 }}
        animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
        }}
        transition={{
            duration: 2,
            delay: delay,
            repeat: Infinity,
            repeatDelay: repeatDelay,
        }}
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                fill="rgba(212, 175, 55, 0.9)"
            />
        </svg>
    </motion.div>
);

// Heart component
const FloatingHeart = ({ delay, left, duration }) => (
    <motion.div
        className="absolute text-4xl"
        style={{ left: `${left}%`, bottom: 0 }}
        initial={{ y: 0, opacity: 0 }}
        animate={{
            y: -600,
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.8],
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

export default function Countdown({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
                setIsComplete(false);
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setIsComplete(true);
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // Generate random bubbles, sparkles, and hearts - client side only to avoid hydration mismatch
    const [bubbles, setBubbles] = useState([]);
    const [sparkles, setSparkles] = useState([]);
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        setBubbles(
            Array.from({ length: 20 }, (_, i) => ({
                id: i,
                delay: Math.random() * 5,
                duration: 4 + Math.random() * 4,
                size: 10 + Math.random() * 30,
                left: Math.random() * 100,
                swayX1: Math.random() * 40 - 20,
                swayX2: Math.random() * 60 - 30,
            }))
        );
        setSparkles(
            Array.from({ length: 15 }, (_, i) => ({
                id: i,
                delay: Math.random() * 4,
                x: Math.random() * 100,
                y: Math.random() * 100,
                repeatDelay: Math.random() * 3,
            }))
        );
        setHearts(
            Array.from({ length: 8 }, (_, i) => ({
                id: i,
                delay: Math.random() * 6,
                left: Math.random() * 100,
                duration: 5 + Math.random() * 3,
            }))
        );
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center mx-4 md:mx-8">
            <span className="text-5xl md:text-7xl font-serif text-rose-gold font-italic mb-2">
                {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm tracking-widest text-rose-gold uppercase">
                {label}
            </span>
        </div>
    );

    return (
        <Section className="bg-[#131C2F] py-24 border-b border-white/5 overflow-hidden relative">
            {/* Celebration animations when countdown is complete */}
            <AnimatePresence>
                {isComplete && (
                    <>
                        {/* Bubbles */}
                        {bubbles.map((bubble) => (
                            <Bubble key={bubble.id} {...bubble} />
                        ))}
                        {/* Sparkles */}
                        {sparkles.map((sparkle) => (
                            <Sparkle key={sparkle.id} {...sparkle} />
                        ))}
                        {/* Floating hearts */}
                        {hearts.map((heart) => (
                            <FloatingHeart key={heart.id} {...heart} />
                        ))}
                    </>
                )}
            </AnimatePresence>

            <div className="container mx-auto text-center relative z-10">
                <AnimatePresence mode="wait">
                    {isComplete ? (
                        // Celebration message
                        <motion.div
                            key="celebration"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="py-8"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <h2 className="text-4xl md:text-6xl font-serif text-rose-gold mb-6">
                                    ✨ We&apos;re Getting Married! ✨
                                </h2>
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-xl md:text-2xl text-white/80 mb-8"
                            >
                                The moment we&apos;ve been waiting for is finally here!
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="text-6xl"
                            >
                                💍 💒 💕
                            </motion.div>
                        </motion.div>
                    ) : (
                        // Countdown display
                        <motion.div
                            key="countdown"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <p className="text-rose-gold tracking-widest uppercase mb-4">Coming Soon!</p>
                                <div className="w-64 h-px bg-rose-gold/30 mx-auto" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap justify-center items-center gap-y-8"
                            >
                                <TimeUnit value={timeLeft.days} label="Days" />
                                <TimeUnit value={timeLeft.hours} label="Hours" />
                                <TimeUnit value={timeLeft.minutes} label="Minutes" />
                                <TimeUnit value={timeLeft.seconds} label="Seconds" />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Section>
    );
}
