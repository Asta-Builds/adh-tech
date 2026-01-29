export default function Testimonials() {
    const testimonials = [
        {
            quote: "ADH-Tech transformed our entire digital infrastructure. Their AI solutions reduced our processing time by 70% and opened new revenue streams we never thought possible.",
            author: "Sarah Chen",
            role: "CTO, FinanceFlow",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
            rating: 5
        },
        {
            quote: "The team's expertise in cloud architecture helped us scale from 10,000 to 10 million users seamlessly. Their proactive approach and 24/7 support exceeded all expectations.",
            author: "Marcus Rodriguez",
            role: "VP Engineering, ScaleUp",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            rating: 5
        },
        {
            quote: "Working with ADH-Tech was a game-changer. They didn't just deliver a product; they became a strategic partner in our digital transformation journey.",
            author: "Emily Thompson",
            role: "CEO, HealthBridge",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
            rating: 5
        }
    ];

    return (
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                        <span className="material-symbols-outlined text-[18px]">format_quote</span>
                        Client Testimonials
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Trusted by <span className="text-primary">Industry Leaders</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say about working with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
                        >
                            {/* Quote icon */}
                            <div className="absolute top-6 right-6 text-blue-100">
                                <span className="material-symbols-outlined text-[48px]">format_quote</span>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-amber-400 text-[20px]">star</span>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-slate-700 leading-relaxed mb-8 relative z-10">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                <div
                                    className="w-12 h-12 rounded-full bg-slate-200 bg-cover bg-center border-2 border-white shadow-sm"
                                    style={{ backgroundImage: `url('${testimonial.avatar}')` }}
                                ></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
