"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Bubble, Sparkle, FloatingHeart, GlowParticle } from "@/components/ui/Animations";

export default function RSVP() {
    const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        guests: "1",
        attending: "Yes, joyfully!",
        message: "",
    });

    // Generate animations client-side only
    const [bubbles, setBubbles] = useState([]);
    const [sparkles, setSparkles] = useState([]);
    const [hearts, setHearts] = useState([]);
    const [glowParticles, setGlowParticles] = useState([]);

    useEffect(() => {
        setBubbles(
            Array.from({ length: 12 }, (_, i) => ({
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
            Array.from({ length: 10 }, (_, i) => ({
                id: i,
                delay: Math.random() * 5,
                x: Math.random() * 100,
                y: Math.random() * 100,
                repeatDelay: Math.random() * 4,
            }))
        );
        setHearts(
            Array.from({ length: 5 }, (_, i) => ({
                id: i,
                delay: Math.random() * 10,
                left: Math.random() * 100,
                duration: 10 + Math.random() * 5,
            }))
        );
        setGlowParticles(
            Array.from({ length: 6 }, (_, i) => ({
                id: i,
                delay: Math.random() * 3,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: 4 + Math.random() * 8,
            }))
        );
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("submitting");

        try {
            const formDataPayload = new FormData();
            formDataPayload.append("Name", formData.name);
            formDataPayload.append("Email", formData.email);
            formDataPayload.append("Guests", formData.guests);
            formDataPayload.append("Attending", formData.attending);
            formDataPayload.append("Message", formData.message);
            formDataPayload.append("Date", new Date().toISOString());

            formDataPayload.append("name", formData.name);
            formDataPayload.append("email", formData.email);
            formDataPayload.append("guests", formData.guests);
            formDataPayload.append("attending", formData.attending);
            formDataPayload.append("message", formData.message);
            formDataPayload.append("date", new Date().toISOString());

            await fetch(
                "https://script.google.com/macros/s/AKfycbwcMgjS6HLJ1F9sAZ4PHWuT3D_A7FFMAsKkRY0h21f7jeTgDRd38F4f0d_tGT1wSORw/exec",
                {
                    method: "POST",
                    body: formDataPayload,
                    mode: "no-cors",
                }
            );

            setFormStatus("success");
            setFormData({ name: "", email: "", guests: "1", attending: "Yes, joyfully!", message: "" });
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Something went wrong. Please try again.");
            setFormStatus("idle");
        }
    };

    return (
        <Section id="rsvp" className="bg-midnight-light/30 overflow-hidden relative">
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
                    RSVP
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 bg-rose-gold mx-auto rounded-full mb-4"
                />
                <p className="text-white/60">Please let us know if you can make it.</p>
            </div>

            <motion.div
                className="max-w-xl mx-auto relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Card className="relative overflow-hidden backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <AnimatePresence mode="wait">
                        {formStatus === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <motion.div
                                    className="text-6xl mb-4"
                                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    🎉
                                </motion.div>
                                <h3 className="text-3xl font-serif text-white mb-4">Thank You!</h3>
                                <p className="text-white/70">
                                    Your response has been recorded. We can&apos;t wait to see you!
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-8"
                                    onClick={() => setFormStatus("idle")}
                                >
                                    Send Another Response
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/50 outline-none transition-all bg-white/5 text-white placeholder:text-white/30"
                                        placeholder="John Doe"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/50 outline-none transition-all bg-white/5 text-white placeholder:text-white/30"
                                        placeholder="john@example.com"
                                    />
                                </motion.div>

                                <motion.div
                                    className="grid grid-cols-2 gap-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div>
                                        <label htmlFor="guests" className="block text-sm font-medium text-white/70 mb-2">Guests</label>
                                        <select
                                            id="guests"
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/50 outline-none transition-all bg-white/5 text-white"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="attending" className="block text-sm font-medium text-white/70 mb-2">Attending?</label>
                                        <select
                                            id="attending"
                                            name="attending"
                                            value={formData.attending}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/50 outline-none transition-all bg-white/5 text-white"
                                        >
                                            <option>Yes, joyfully!</option>
                                            <option>No, regretfully.</option>
                                        </select>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/50 outline-none transition-all bg-white/5 text-white placeholder:text-white/30"
                                        placeholder="Any dietary restrictions or sweet notes?"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="w-full"
                                        disabled={formStatus === "submitting"}
                                    >
                                        {formStatus === "submitting" ? "Sending..." : "Confirm Attendance"}
                                    </Button>
                                </motion.div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </Card>
            </motion.div>
        </Section>
    );
}
