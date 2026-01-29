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
        <section className="py-20 px-6 lg:px-12 bg-blue-600 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Numbers That Speak
                    </h2>
                    <p className="text-blue-100 max-w-lg mx-auto">
                        Our track record of excellence and commitment to delivering exceptional results.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white text-primary mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                <span className="material-symbols-outlined text-[24px]">{stat.icon}</span>
                            </div>

                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.value}
                            </div>

                            <h3 className="text-lg font-semibold text-blue-50 mb-1">
                                {stat.label}
                            </h3>

                            <p className="text-sm text-blue-100/80">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
