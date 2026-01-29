export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
            {/* Background blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/60 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-100/50 rounded-full blur-[100px]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Content */}
                <div className="flex flex-col gap-8 lg:pr-10 z-10 order-2 lg:order-1">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 self-start rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-primary">
                        <span className="material-symbols-outlined text-[20px]">check_circle</span>
                        Leading IT Solutions Provider
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900">
                        Empowering Your Business Through <span className="text-primary">Technology</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
                        Comprehensive IT solutions designed to streamline operations, enhance security, and drive digital transformation for modern enterprises. We handle the tech so you can focus on growth.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-2">
                        <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white shadow-glow transition-all hover:bg-blue-700 hover:shadow-glow-hover hover:-translate-y-0.5 cursor-pointer">
                            <span>Get Started</span>
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </button>
                        <button className="flex items-center justify-center rounded-lg border border-slate-200 bg-white px-8 py-3.5 text-base font-bold text-text-main transition-all hover:bg-slate-50 hover:border-slate-300 cursor-pointer">
                            View Services
                        </button>
                    </div>

                    {/* Trusted Section */}
                    <div className="mt-8 pt-8 border-t border-slate-200">
                        <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-6">TRUSTED BY INNOVATIVE COMPANIES</p>
                        <div className="flex items-center gap-8 opacity-40">
                            {/* Geometric Logos */}
                            <div className="w-12 h-8 bg-slate-800 rounded-sm"></div>
                            <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
                            <div className="w-12 h-4 bg-slate-800 rounded-sm"></div>
                            <div className="w-0 h-0 border-l-[16px] border-l-transparent border-b-[32px] border-b-slate-800 border-r-[16px] border-r-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 order-1 lg:order-2 group bg-[#2d7a7a]">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6gnBDoFiwudWgjD6zSuKjwUbZ5yUAdnxWOBkrsbNIq7fmZWfh9t5LuDvCbCJ0kHjORxuzq4o2xUydOCoXb2h_CetVuQywmBD0O-Cdyyt0w6l1nUX0D1YOlPwJNb8ttaPGB35BBIVa2FvEf9TpAt659S1-vUWKi-jzys98NZSPk2Ncx-1Hxm9ixGxnsshNLhXVeMa8i6GOSnPdZYdlErIniB0UfzGvvhvHiamqQCWEqx7176c_vEMbRJZuvYpi4kailBC7mb46vEtr')",
                            filter: "brightness(1.05) contrast(1.05)"
                        }}
                    ></div>

                    {/* Floating Card */}
                    <div className="absolute bottom-8 left-8 z-20 bg-white/95 backdrop-blur-md border border-slate-100 p-5 rounded-2xl shadow-xl min-w-[260px]">
                        <div className="flex items-start gap-4 mb-3">
                            <div className="flex items-center justify-center size-12 rounded-full bg-green-50 text-green-600">
                                <span className="material-symbols-outlined text-[24px]">verified_user</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">System Secure</h3>
                                <p className="text-sm text-text-secondary">99.9% Uptime Guaranteed</p>
                            </div>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full w-[95%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
