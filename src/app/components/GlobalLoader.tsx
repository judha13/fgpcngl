"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GlobalLoader({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);

        const handleImagesLoaded = () => {
            const images = Array.from(document.images);
            const unloadedImages = images.filter((img) => !img.complete);

            if (unloadedImages.length === 0) {
                setLoading(false);
                return;
            }

            let loadedCount = 0;

            unloadedImages.forEach((img) => {
                img.onload = img.onerror = () => {
                    loadedCount++;
                    if (loadedCount === unloadedImages.length) {
                        setLoading(false);
                    }
                };
            });

            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };

        const delay = setTimeout(handleImagesLoaded, 50);

        return () => clearTimeout(delay);
    }, [pathname]);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [loading]);

    return (
        <div className="relative">
            <div className={loading ? "blur-sm pointer-events-none transition-all duration-300" : "transition-all duration-300"}>
                {children}
            </div>

            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
                    <div className="w-12 h-12 border-4 border-[#84373D] border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
}
