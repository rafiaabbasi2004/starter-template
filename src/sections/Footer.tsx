import { FC} from "react";
import Button from "@/components/button";
const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return(
        <footer className="bg-stone-900 text-white py-8">
            <div className="container">
                <div className="section">
                <div className="flex items-center gap-3">
                    <div className="size-3 rounded-full bg-green-400"></div>
                    <span className="uppercase">One sopt available for next month</span></div>
                <div className="grid md:grid-cols-3">
                    <div className="md:col-span-2">
                <h2 className="md:text-7xl text-4xl mt-8 font-extralight">
                    Enough talk. lets make something great together
                </h2>
                <Button variant="secondary" className="mt-8">
                    info@abc.com
                </Button>
                </div>
                <nav className="flex flex-col gap-8 mt-16 md:items-end ">
                    {footerLinks.map((link) => (
                        <a key={link.href} href={link.href} className="footer-link">
                          {link.label}
                        </a>
                    ))}
                </nav>
            </div>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <p className="py-16 text-white/30 text-sm items-center">copyright © 2026 All rights reserved</p>
        </div>  
        </footer>
    );
}


