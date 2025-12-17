"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const events = [
    {
        title: "Haldi",
        date: "Feb 11, 2026",
        time: "7:00 PM onwards",
        location: "Noida",
        description: "A joyful ceremony filled with turmeric, laughter, and blessings, where love is showered and traditions bring everyone together.",
    },
    {
        title: "Mehendi",
        date: "Feb 12, 2026",
        time: "4:00 PM onwards",
        location: "Home",
        description: "An afternoon of henna, music, and colorful festivities. Dress code: Colorful & Vibrant.",
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
    return (
        <Section id="events" className="bg-midnight-light/30">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif text-white mb-4"
                >
                    Wedding Events
                </motion.h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                    We can't wait to celebrate with you. Here are the details for our upcoming functions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full hover:border-rose-gold/50 transition-colors group">
                            <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-rose-gold transition-colors">
                                {event.title}
                            </h3>

                            <div className="space-y-3 mb-6 text-white/80">
                                <div className="flex items-center gap-3">
                                    <Calendar size={18} className="text-rose-gold" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock size={18} className="text-rose-gold" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin size={18} className="text-rose-gold" />
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            <p className="text-white/60 text-sm mb-6 leading-relaxed">
                                {event.description}
                            </p>

                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
