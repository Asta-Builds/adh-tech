export default function CTA() {
    return (
        <section className="py-20 px-6 lg:px-12 max-w-[960px] mx-auto w-full text-center">
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-xl shadow-slate-200">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-blue-100/50 blur-[80px] rounded-full pointer-events-none"></div>

                <h2 className="relative text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ready to upgrade your infrastructure?</h2>

                <p className="relative text-text-secondary text-lg mb-8 max-w-xl mx-auto">
                    Let's discuss how ADH-Tech can build the technological foundation for your future growth.
                </p>

                <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white shadow-glow transition-all hover:bg-blue-700 hover:shadow-glow-hover cursor-pointer">
                        Start a Project
                    </a>

                    <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-8 py-3.5 text-base font-bold text-slate-800 hover:bg-slate-50 hover:border-slate-300 cursor-pointer">
                        <span className="material-symbols-outlined">call</span>
                        Book Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}
