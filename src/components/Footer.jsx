"use client";

import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-midnight py-12 border-t border-rose-gold/20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-serif text-3xl text-white mb-6">Kajal & Junaid</h2>
                <p className="font-script text-2xl text-rose-gold mb-8">#KaJu</p>

                <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                    <span>Made with</span>
                    <Heart size={14} className="fill-rose-gold text-rose-gold" />
                    <span>for our loved ones</span>
                </div>
            </div>
        </footer>
    );
}
