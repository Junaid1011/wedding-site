"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

export default function Countdown({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

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
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

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
        <Section className="bg-[#131C2F] py-24 border-b border-white/5">
            <div className="container mx-auto text-center">
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
            </div>
        </Section>
    );
}
