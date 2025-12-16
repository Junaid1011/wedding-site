"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const story = [
    {
        year: "2010",
        title: "First Met",
        description: "We met in June 2010 in 7th grade at school. What started as a simple friendship became something special. Sitting behind each other during exams, our bond slowly grew stronger. That year became one of the most beautiful beginnings of our story."
    },

    {
        year: "2015",
        title: "Best Friends",
        description: "From 2010 to 2015, we shared an unbreakable friendship. We stood by each other through school days, laughter, and memories, never realizing that our friendship was quietly laying the foundation for something much deeper."
    },

    {
        year: "2018",
        title: "Growing Closer",
        description: "2018 was the year we truly began to understand each other. We cared more, shared more, and slowly grew closer. What felt natural and effortless slowly turned into something meaningful and special."
    },
    {
        year: "2019",
        title: "The First Confession",
        description: "In November 2019, we finally confessed our love to each other. What had been felt in silence for years was finally spoken aloud. That moment marked the beginning of our beautiful relationship."
    },
    {
        year: "2023",
        title: "Families United",
        description: "2023 was a turning point in our journey. After challenges and patience, our families finally came together and blessed our love, making our dream of forever feel real."
    },
    {
        year: "2025",
        title: "Engagement",
        description: "In 2025, we celebrated our engagement — a promise made official, a love celebrated, and the start of a lifetime together."
    },
    {
        year: "2026",
        title: "Forever Begins",
        description: "In 2026, we will celebrate the beginning of our forever. What started as a childhood friendship will turn into a lifetime promise as we say our vows and choose each other for every tomorrow."
    }



];

export default function Timeline() {
    return (
        <Section id="story" className="bg-midnight">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif text-white mb-4"
                >
                    Our Love Story
                </motion.h2>
                <div className="w-24 h-1 bg-rose-gold mx-auto rounded-full" />
            </div>

            <div className="relative container mx-auto max-w-4xl">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-rose-gold/30 -translate-x-1/2" />

                <div className="space-y-12">
                    {story.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-rose-gold rounded-full -translate-x-1/2 mt-6 border-4 border-midnight z-10" />

                            {/* Content */}
                            <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                                <Card className={`text-left ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                    <span className="text-rose-gold font-serif text-xl font-bold block mb-2">
                                        {item.year}
                                    </span>
                                    <h3 className="text-2xl font-serif text-white mb-3">{item.title}</h3>
                                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                                </Card>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
