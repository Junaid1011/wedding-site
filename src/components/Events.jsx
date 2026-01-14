"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { useAnimations, BackgroundAnimations } from "@/components/ui/Animations";

const events = [
    {
        title: "Haldi",
        date: "Feb 12, 2026",
        time: "12:00 PM onwards",
        location: "Noida",
        description: "A joyful ceremony filled with turmeric, laughter, and blessings, where love is showered and traditions bring everyone together.",
    },
    {
        title: "Mehndi",
        date: "Feb 12, 2026",
        time: "7:00 PM onwards",
        location: "Noida",
        description: "An evening of henna, music, and colorful festivities. Dress code: Colorful & Vibrant.",
    },
    {
        title: "The Wedding Ceremony",
        date: "Feb 13, 2026",
        time: "7:00 PM",
        location: "Sacred Flames",
        description: "The auspicious moment where we tie the knot.",
    },
    {
        title: "Reception",
        date: "Feb 14, 2026",
        time: "7:00 PM",
        location: "Sacred Flames",
        description: "An evening of celebration, love, and togetherness as we begin our new journey surrounded by family and friends.",
    },
];

export default function Events() {
    const { bubbles, sparkles, hearts, glowParticles } = useAnimations({
        bubbleCount: 12,
        sparkleCount: 10,
        heartCount: 5,
        glowCount: 6
    });

    return (
        <Section id="events" className="bg-midnight-light/30 overflow-hidden relative">
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
                    Wedding Events
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 bg-rose-gold mx-auto rounded-full mb-4"
                />
                <p className="text-white/60 max-w-2xl mx-auto">
                    We can&apos;t wait to celebrate with you. Here are the details for our upcoming functions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto relative z-10">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Card className="h-full hover:border-rose-gold/50 transition-all duration-300 group backdrop-blur-sm bg-white/5 hover:bg-white/10">
                            <motion.h3
                                className="text-2xl font-serif text-white mb-4 group-hover:text-rose-gold transition-colors"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                            >
                                {event.title}
                            </motion.h3>

                            <div className="space-y-3 mb-6 text-white/80">
                                <motion.div
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                >
                                    <Calendar size={18} className="text-rose-gold" />
                                    <span>{event.date}</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.35 }}
                                >
                                    <Clock size={18} className="text-rose-gold" />
                                    <span>{event.time}</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.4 }}
                                >
                                    <MapPin size={18} className="text-rose-gold" />
                                    <span>{event.location}</span>
                                </motion.div>
                            </div>

                            <motion.p
                                className="text-white/60 text-sm mb-6 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                            >
                                {event.description}
                            </motion.p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
