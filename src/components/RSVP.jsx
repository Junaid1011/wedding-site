"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function RSVP() {
    const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        guests: "1",
        attending: "Yes, joyfully!",
        message: "",
    });

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
            // Append capitalized keys (matching the guide)
            formDataPayload.append("Name", formData.name);
            formDataPayload.append("Email", formData.email);
            formDataPayload.append("Guests", formData.guests);
            formDataPayload.append("Attending", formData.attending);
            formDataPayload.append("Message", formData.message);
            formDataPayload.append("Date", new Date().toISOString());

            // Append lowercase keys (fallback in case user used lowercase headers)
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
                    mode: "no-cors", // Important for Google Apps Script
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
        <Section id="rsvp" className="bg-midnight-light/30">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif text-white mb-4"
                >
                    RSVP
                </motion.h2>
                <p className="text-white/60">Please let us know if you can make it by November 1st.</p>
            </div>

            <div className="max-w-xl mx-auto">
                <Card className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {formStatus === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="text-6xl mb-4">🎉</div>
                                <h3 className="text-3xl font-serif text-white mb-4">Thank You!</h3>
                                <p className="text-white/70">
                                    Your response has been recorded. We can't wait to see you!
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
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-rose-gold focus:ring-1 focus:ring-rose-gold outline-none transition-all bg-white/5 text-white placeholder:text-white/30"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-rose-gold focus:ring-1 focus:ring-rose-gold outline-none transition-all bg-white/5 text-white placeholder:text-white/30"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="guests" className="block text-sm font-medium text-white/70 mb-2">Guests</label>
                                        <select
                                            id="guests"
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-rose-gold focus:ring-1 focus:ring-rose-gold outline-none transition-all bg-white/5 text-white"
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
                                            className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-rose-gold focus:ring-1 focus:ring-rose-gold outline-none transition-all bg-white/5 text-white"
                                        >
                                            <option>Yes, joyfully!</option>
                                            <option>No, regretfully.</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-rose-gold focus:ring-1 focus:ring-rose-gold outline-none transition-all bg-white/5 text-white placeholder:text-white/30"
                                        placeholder="Any dietary restrictions or sweet notes?"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full"
                                    disabled={formStatus === "submitting"}
                                >
                                    {formStatus === "submitting" ? "Sending..." : "Confirm Attendance"}
                                </Button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </Card>
            </div>
        </Section>
    );
}
