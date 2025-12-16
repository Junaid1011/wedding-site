"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Section({ children, className, id, ...props }) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn("py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden", className)}
            {...props}
        >
            {children}
        </motion.section>
    );
}
