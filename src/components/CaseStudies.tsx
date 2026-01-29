export default function CaseStudies() {
    const cases = [
        {
            sector: "FinTech",
            title: "Quantum Finance Core",
            description: "Implementing quantum-resistant encryption algorithms for next-generation banking platforms.",
            date: "2023 - Q4",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRaABW20vIEyQv8EX-iDv-Vq-pBF77kQi9q_moiycyrm9DxYBr5kXIE5ggbpATo-Hb20XG75RytfJTo_dw7yXZCZ9plVTSuhOt7XXkpDrIUs2cGR7d8ItBqC_Sxrh46SFAgeg850N4YjIfXoIYcIFFhrB4j30ZIlVg-zRn9aDCMIATS3Ps3IJOzEnt2D_LLyrMr2mLGAB-zT3sj-PlPkEuwAkq26yCHeaw_97oPz6I9Xo4jVutcQPhi7Oqjjnbvw4yMQRJ1ZGmBu63"
        },
        {
            sector: "Healthcare",
            title: "Neural Med Grid",
            description: "AI-powered diagnostic tools processing petabytes of patient data in real-time.",
            date: "2024 - Q1",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtTZ6BIoS_DHGMKC4i7HWkqCijG-zDAUpcp1Z-qaZgE1vN2O1p7UnG3hi49DH3v004K5HRtYIC7nr4FWhDTk6FQiB-MN53O5M2zptIamAR-Ca-OBFgYEl3tsZ3tGv0RwhtEhQXBz5silCZRYfmE8hP4AzMtr2WkeixYS88Jmf2SMWSkEeooHwsgLMRoNwjpA6HsftClxzqlWxmDhSdt_c3O8xiPdwiuXFJHlblhb8iGrprOunfPtH4AemQlpoCW-g4VOXa78Qhl80x"
        },
        {
            sector: "Security",
            title: "Zero Trust Protocol",
            description: "Redefining enterprise security with an identity-first, zero-trust architecture.",
            date: "2023 - Q2",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5wKxb8cZ83SqFZllU-zCcfD-BIQjCO3TSEM63YrhpwfkWfA_6Cdt0gbUIqjW2yAVvLZC7MPoZqEcb9Jy90N-aYLi7QcqPLY4DM_UZNnvBOyEFV0fMzJVxvJXtYcNVayRXqCDURohKZeJtlTGadVKuqJI5w7UUciTj3XkkYXAvFS6eLPmLOiyMSjp9rGlznc82pZxQJz9zYTZRvlxzJYLs2cQSxZGjgmpF-lqW7rY5gjjt-HmhT2mtgkE8K7bn4hZWyogFDGXmdoqw"
        }
    ];

    return (
        <section id="case-studies" className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Engineering the Future</h2>
                    <p className="text-text-secondary max-w-lg">Explore how we've helped leading organizations transform their digital infrastructure.</p>
                </div>
                <a className="text-primary font-bold hover:text-blue-700 transition-colors inline-flex items-center gap-2 group" href="#">
                    View All Case Studies
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cases.map((item, index) => (
                    <article key={index} className="group relative flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-card-hover cursor-pointer">
                        <div className="h-48 w-full overflow-hidden relative">
                            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                                {item.sector}
                            </div>
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url('${item.image}')` }}
                            >
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-sm text-text-secondary mb-6 line-clamp-3">
                                {item.description}
                            </p>
                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                                <span className="text-xs text-slate-500 font-mono">{item.date}</span>
                                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">arrow_forward</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
