"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useAnimations, BackgroundAnimations } from "@/components/ui/Animations";

export default function Location() {
    const { bubbles, sparkles, hearts, glowParticles } = useAnimations({
        bubbleCount: 10,
        sparkleCount: 8,
        heartCount: 3,
        glowCount: 5
    });

    return (
        <Section id="location" className="bg-midnight overflow-hidden relative">
            {/* Background animations */}
            <BackgroundAnimations
                bubbles={bubbles}
                sparkles={sparkles}
                hearts={hearts}
                glowParticles={glowParticles}
            />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-serif text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        The Venue
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-rose-gold rounded-full mb-8"
                    />
                    <motion.div
                        className="flex items-start gap-4 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <MapPin className="text-rose-gold mt-1 shrink-0" size={24} />
                        </motion.div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Sacred Flames</h3>
                            <p className="text-white/70 leading-relaxed">
                                Main Kheri Road, Sector 89,<br />
                                Faridabad, Haryana 121002,<br />
                                India
                            </p>
                        </div>
                    </motion.div>
                    <motion.p
                        className="text-white/60 mb-8 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Join us at Sacred Flames for a magical celebration of love.
                        Ample parking is available for all guests.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Button variant="outline" onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Sacred+Flames+Main+Kheri+Road+Sector+89+Faridabad+Haryana+121002+India", "_blank")}>
                            Get Directions
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl ring-2 ring-rose-gold/20 hover:ring-rose-gold/50 transition-all duration-300"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.884353787765!2d77.3536!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd9000000001%3A0x0!2sSacred+Flames!5e0!3m2!1sen!2sin!4v1629783584685!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </motion.div>
            </div>
        </Section>
    );
}
