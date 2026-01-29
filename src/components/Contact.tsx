export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                        <span className="material-symbols-outlined text-[18px]">chat</span>
                        Get in Touch
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Let's Built Something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">Extraordinary</span>
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg">
                        Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you within 24 hours.
                    </p>

                    <div className="flex flex-col gap-8">
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-primary flex-shrink-0">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h3>
                                <p className="text-text-secondary">123 Innovation Drive, Tech Valley<br />San Francisco, CA 94105</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-primary flex-shrink-0">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                                <p className="text-text-secondary">hello@adh-tech.com<br />careers@adh-tech.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-primary flex-shrink-0">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                                <p className="text-text-secondary">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm PST</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50">
                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="firstName" className="text-sm font-bold text-slate-900">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 placeholder:text-slate-400"
                                    placeholder="John"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="lastName" className="text-sm font-bold text-slate-900">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 placeholder:text-slate-400"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-bold text-slate-900">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 placeholder:text-slate-400"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-sm font-bold text-slate-900">Subject</label>
                            <select
                                id="subject"
                                className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 cursor-pointer"
                            >
                                <option>General Inquiry</option>
                                <option>Project Proposal</option>
                                <option>Careers</option>
                                <option>Partnership</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-bold text-slate-900">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>

                        <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white shadow-glow transition-all hover:bg-blue-700 hover:shadow-glow-hover hover:-translate-y-0.5 cursor-pointer mt-2">
                            Send Message
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
