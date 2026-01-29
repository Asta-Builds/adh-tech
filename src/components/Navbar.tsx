import { useState } from 'react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-border-light bg-white/90 backdrop-blur-md">
            <div className="flex items-center justify-between px-6 py-4 lg:px-12 max-w-[1440px] mx-auto">

                {/* Logo */}
                <div className="flex items-center gap-3 text-text-main group cursor-pointer">
                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary text-white shadow-glow transition-all duration-300">
                        <span className="material-symbols-outlined">dataset</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900">ADH-Tech</h2>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" href="#">Home</a>
                    <a className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" href="#">Services</a>
                    <a className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" href="#">Case Studies</a>
                    <a className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" href="#">About</a>
                </div>

                {/* CTA Button */}
                <button className="hidden md:flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-all hover:bg-blue-700 hover:shadow-glow-hover hover:-translate-y-0.5 cursor-pointer">
                    <span>Contact Us</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text-main cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border-light p-4 flex flex-col gap-4 shadow-lg">
                    <a className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" href="#">Home</a>
                    <a className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" href="#">Services</a>
                    <a className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" href="#">Case Studies</a>
                    <a className="text-sm font-medium text-text-secondary hover:text-primary transition-colors" href="#">About</a>
                    <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-all hover:bg-blue-700 cursor-pointer">
                        <span>Contact Us</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                </div>
            )}
        </header>
    );
}
