export default function Stats() {
    const stats = [
        {
            icon: "rocket_launch",
            value: "500+",
            label: "Projects Delivered",
            description: "Successful implementations worldwide"
        },
        {
            icon: "groups",
            value: "150+",
            label: "Expert Engineers",
            description: "Talented professionals on our team"
        },
        {
            icon: "public",
            value: "45+",
            label: "Countries Served",
            description: "Global reach and local expertise"
        },
        {
            icon: "trending_up",
            value: "99.9%",
            label: "Uptime Guarantee",
            description: "Reliable infrastructure always"
        }
    ];

    return (
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Numbers That Speak
                    </h2>
                    <p className="text-slate-400 max-w-lg mx-auto">
                        Our track record of excellence and commitment to delivering exceptional results.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-500 mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-white text-[24px]">{stat.icon}</span>
                            </div>

                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                {stat.value}
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-1">
                                {stat.label}
                            </h3>

                            <p className="text-sm text-slate-400">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
