'use client';
const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];
import Image from "next/image";
import LogoImage from "../assets/images/logo.svg";
import Button from "../components/button";
import { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
// ...existing imports...

export default function Navbar() {
    const [isopen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        if (isopen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isopen]);

    return (
        <section className="py-4 lg:py-8 sticky top-0 z-50 bg-transparent">
            <div className="container max-w-5xl relative">
                <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full py-2 px-4 md:pr-2 items-center bg-neutral-950/70 backdrop-blur">
                    <div>
                        <Image src={LogoImage} alt="Logo" className="h-9 md:h-auto w-auto" />
                    </div>
                    <div className="lg:flex justify-center items-center hidden">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map((link) => (
                                <a href={link.href} key={link.label}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    {/* Wrap icon, buttons, and dropdown in one parent div with ref */}
                    <div className="flex justify-end gap-4 relative" ref={menuRef}>
                        {/* Mobile menu icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu md:hidden cursor-pointer"
                            onClick={() => setIsOpen(!isopen)}
                        >
                            <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition-all", isopen && 'rotate-45 -translate-y-1')}></line>
                            <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition-all", isopen && 'opacity-0')}></line>
                            <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition-all", isopen && '-rotate-45 translate-y-1')}></line>
                        </svg>
                        <Button variant="secondary" className="hidden md:inline-flex items-center">LogIn</Button>
                        <Button variant="primary" className="hidden md:inline-flex items-center">SignUp</Button>
                        {/* Mobile dropdown menu */}
                        {isopen && (
                            <div
                                className="absolute right-0 mt-12 w-56 bg-neutral-900 border border-white/10 rounded-2xl shadow-lg flex flex-col items-stretch md:hidden z-40 animate-fadeIn"
                            >
                                <nav className="flex flex-col gap-2 py-4 px-4">
                                    {navLinks.map((link) => (
                                        <a
                                            href={link.href}
                                            key={link.label}
                                            onClick={() => setIsOpen(false)}
                                            className="text-white py-2 px-3 rounded hover:bg-neutral-800 transition"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    <Button variant="secondary" className="w-full mt-2">LogIn</Button>
                                    <Button variant="primary" className="w-full mt-2">SignUp</Button>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}