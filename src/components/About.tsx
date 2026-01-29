export default function About() {
    const values = [
        {
            icon: "lightbulb",
            title: "Innovation First",
            description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
        },
        {
            icon: "handshake",
            title: "Client Partnership",
            description: "Your success is our success. We build lasting relationships based on trust and results."
        },
        {
            icon: "verified",
            title: "Quality Driven",
            description: "We maintain the highest standards in every project, ensuring excellence in delivery."
        }
    ];

    return (
        <section id="about" className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                        <span className="material-symbols-outlined text-[18px]">info</span>
                        About ADH-Tech
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">Digital Future</span> Together
                    </h2>

                    <p className="text-text-secondary text-lg leading-relaxed mb-6">
                        Founded with a vision to transform how businesses leverage technology, ADH-Tech has grown into a leading technology partner for enterprises worldwide. We combine deep technical expertise with strategic thinking to deliver solutions that create lasting impact.
                    </p>

                    <p className="text-text-secondary leading-relaxed mb-8">
                        Our team of passionate engineers, designers, and strategists work collaboratively to tackle the most challenging problems and turn ambitious ideas into reality.
                    </p>

                    <div className="flex flex-col gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="flex gap-4 items-start group">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-primary group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined">{value.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">{value.title}</h3>
                                    <p className="text-text-secondary text-sm">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10">
                        <button className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white shadow-glow transition-all hover:bg-blue-700 hover:shadow-glow-hover hover:-translate-y-0.5 cursor-pointer">
                            Learn More About Us
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Right Content - Image Grid */}
                <div className="order-1 lg:order-2 relative">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div
                                className="h-48 rounded-2xl bg-cover bg-center shadow-lg border border-slate-200"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop')" }}
                            ></div>
                            <div
                                className="h-64 rounded-2xl bg-cover bg-center shadow-lg border border-slate-200"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop')" }}
                            ></div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div
                                className="h-64 rounded-2xl bg-cover bg-center shadow-lg border border-slate-200"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop')" }}
                            ></div>
                            <div
                                className="h-48 rounded-2xl bg-cover bg-center shadow-lg border border-slate-200"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop')" }}
                            ></div>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl border border-slate-200 p-4 flex items-center gap-3">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600">
                            <span className="material-symbols-outlined">workspace_premium</span>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900">10+</div>
                            <div className="text-xs text-text-secondary">Years of Excellence</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
