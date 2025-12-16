"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Button({ children, className, variant = "primary", ...props }) {
    const variants = {
        primary: "bg-rose-gold text-white hover:bg-rose-gold/90 shadow-md",
        outline: "border border-rose-gold text-white hover:bg-rose-gold/10",
        glass: "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 shadow-lg",
        ghost: "hover:bg-rose-gold/10 text-white",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "px-8 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
