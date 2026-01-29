export default function Services() {
    const services = [
        {
            icon: "psychology",
            title: "AI & Machine Learning",
            description: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization.",
            features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"]
        },
        {
            icon: "cloud",
            title: "Cloud Architecture",
            description: "Design and implement scalable, secure cloud infrastructure that grows with your business needs.",
            features: ["AWS / Azure / GCP", "Microservices", "DevOps Automation"]
        },
        {
            icon: "shield",
            title: "Cybersecurity",
            description: "Protect your digital assets with enterprise-grade security solutions and zero-trust architecture.",
            features: ["Threat Detection", "Compliance", "Security Audits"]
        },
        {
            icon: "code",
            title: "Custom Development",
            description: "Build tailored software solutions that perfectly align with your unique business requirements.",
            features: ["Web & Mobile Apps", "API Development", "System Integration"]
        },
        {
            icon: "analytics",
            title: "Data Analytics",
            description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
            features: ["Business Intelligence", "Real-time Dashboards", "Data Warehousing"]
        },
        {
            icon: "support_agent",
            title: "IT Consulting",
            description: "Strategic technology guidance to help you make informed decisions and optimize your IT investments.",
            features: ["Digital Strategy", "Tech Roadmaps", "Process Optimization"]
        }
    ];

    return (
        <section id="services" className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                    <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                    Our Expertise
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                    Services That Drive <span className="text-primary">Success</span>
                </h2>
                <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                    We offer comprehensive technology solutions tailored to transform your business and accelerate growth.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-primary mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                            {service.title}
                        </h3>

                        <p className="text-text-secondary text-sm leading-relaxed mb-6">
                            {service.description}
                        </p>

                        <ul className="flex flex-wrap gap-2">
                            {service.features.map((feature, i) => (
                                <li
                                    key={i}
                                    className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full"
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-primary">arrow_forward</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
