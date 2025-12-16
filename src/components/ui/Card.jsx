"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Card({ children, className, ...props }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "backdrop-blur-md bg-midnight-light/50 border border-white/10 shadow-xl rounded-2xl p-6 md:p-8",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
