"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Floating Bubble component
export const Bubble = ({ delay, duration, size, left, swayX1, swayX2 }) => (
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
export const Sparkle = ({ delay, x, y, repeatDelay }) => (
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
export const FloatingHeart = ({ delay, left, duration }) => (
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
export const GlowParticle = ({ delay, x, y, size }) => (
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

// Hook to generate animations client-side only
export function useAnimations(config = {}) {
    const {
        bubbleCount = 10,
        sparkleCount = 8,
        heartCount = 4,
        glowCount = 5
    } = config;

    const [bubbles, setBubbles] = useState([]);
    const [sparkles, setSparkles] = useState([]);
    const [hearts, setHearts] = useState([]);
    const [glowParticles, setGlowParticles] = useState([]);

    useEffect(() => {
        setBubbles(
            Array.from({ length: bubbleCount }, (_, i) => ({
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
            Array.from({ length: sparkleCount }, (_, i) => ({
                id: i,
                delay: Math.random() * 5,
                x: Math.random() * 100,
                y: Math.random() * 100,
                repeatDelay: Math.random() * 4,
            }))
        );
        setHearts(
            Array.from({ length: heartCount }, (_, i) => ({
                id: i,
                delay: Math.random() * 10,
                left: Math.random() * 100,
                duration: 10 + Math.random() * 5,
            }))
        );
        setGlowParticles(
            Array.from({ length: glowCount }, (_, i) => ({
                id: i,
                delay: Math.random() * 3,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: 4 + Math.random() * 8,
            }))
        );
    }, [bubbleCount, sparkleCount, heartCount, glowCount]);

    return { bubbles, sparkles, hearts, glowParticles };
}

// Render all background animations
export function BackgroundAnimations({ bubbles, sparkles, hearts, glowParticles }) {
    return (
        <>
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
        </>
    );
}
