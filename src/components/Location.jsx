"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Location() {
    return (
        <Section id="location" className="bg-midnight">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">The Venue</h2>
                    <div className="flex items-start gap-4 mb-6">
                        <MapPin className="text-rose-gold mt-1 shrink-0" size={24} />
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Sacred Flames</h3>
                            <p className="text-white/70 leading-relaxed">
                                Main Kheri Road, Sector 89,<br />
                                Faridabad, Haryana 121002,<br />
                                India
                            </p>
                        </div>
                    </div>
                    <p className="text-white/60 mb-8 leading-relaxed">
                        Join us at Sacred Flames for a magical celebration of love.
                        Ample parking is available for all guests.
                    </p>
                    <Button variant="outline" onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Sacred+Flames+Main+Kheri+Road+Sector+89+Faridabad+Haryana+121002+India", "_blank")}>
                        Get Directions
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl"
                >
                    {/* Map Placeholder - In production, use Google Maps Embed API */}
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
