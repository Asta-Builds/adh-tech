export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
            {/* Background blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/60 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-100/50 rounded-full blur-[100px]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Left Content */}
                <div className="flex flex-col gap-6 lg:pr-10 z-10 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 self-start rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-medium text-primary">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Next Generation Technology
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900">
                        Innovating <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">Tomorrow,</span> Today
                    </h1>

                    <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
                        We bridge the gap between complex data and human experience. Empowering enterprises with AI-driven insights and scalable infrastructure.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <button className="flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-white shadow-glow transition-all hover:bg-blue-700 hover:shadow-glow-hover hover:-translate-y-0.5 cursor-pointer">
                            Explore Solutions
                        </button>
                        <button className="flex items-center justify-center rounded-lg border border-slate-200 bg-white px-8 py-3.5 text-base font-bold text-text-main transition-all hover:bg-slate-50 hover:border-slate-300 cursor-pointer">
                            View Case Studies
                        </button>
                    </div>

                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-200">
                        <div className="flex -space-x-3">
                            <div
                                className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center shadow-sm"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDm8lK3iAQWzdMoNv862XdukC7gDsG3KOye3Ay1O3NpilNu7Nv04V8HZpwht8A4lGuQuuF7s3lP3muVGgp7-8QdQl2BR5VqDWGNvFgOmw7D0tdJbL-T4eZOLUu-PZsAktehVzztQhsVEr9Ir9yt-mKNjQ-nXwxN3QkahndzhI9xlGFSD-EH4STdmlMyC2ncIQ16paeZPZ1O7s22I7CwBD1C59BidJ1pkKxaFtfXTH2H-fHGH1jIK86kOB-wYIDWh6ObBC8ghj2FAQAq')" }}
                            ></div>
                            <div
                                className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center shadow-sm"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAudnR7KJ5JL5NUkUKE9uJYtzAGowex-T879OBGXOym7CEhgbOocSyjwg8y85Wa8t5IU5-2VZ5ODDQ7Y7puokeTp5x6Z4Uy-0yeC1_Zjl50fpGh7FTWy_Us2Qa1eSMZxh95qG5HNej9VIXR3VPbyuKFMdD7zLqN4JEEsYAEbUe53T4NsJtvVtVjunCl4B-X7hfEvC2_-ozaKyw0p84gds73cbudym4iaL20gTJPOCWftrME-fFKkbP1G-xbRQxMb-gz0Wm5MfnjB53Q')" }}
                            ></div>
                            <div
                                className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center shadow-sm"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYMrwCqen_lkzMrd3XeVE9BmtTx8zIzSpXdm7KKfmajRQQbkdV8EnZsjyNXzIr064IqQGSHXPwPp2BVKzdqFoda7-ptEP_QMMoz2tVyvTSutt39OVsajpbRbf458hCr6AOGrh9xjOYhUBAbsenwP7bKnzg-evQ5JRVQ2mqp3yBcV9SALF1egDYmtd9UPHrXU-3x_IQOyFQMLU_Yr_hdA-8ZzfgdsB2PU3CTnfbixGhN1fJrLQcrjUcX1viE2dr4wKN6ZXubar9hsei')" }}
                            ></div>
                        </div>
                        <p className="text-sm text-text-secondary"><strong className="text-slate-900">500+</strong> projects delivered globally.</p>
                    </div>
                </div>

                {/* Right Content - 3D Visual */}
                <div className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-blue-900/10 order-1 lg:order-2 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent z-10 opacity-30"></div>
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6gnBDoFiwudWgjD6zSuKjwUbZ5yUAdnxWOBkrsbNIq7fmZWfh9t5LuDvCbCJ0kHjORxuzq4o2xUydOCoXb2h_CetVuQywmBD0O-Cdyyt0w6l1nUX0D1YOlPwJNb8ttaPGB35BBIVa2FvEf9TpAt659S1-vUWKi-jzys98NZSPk2Ncx-1Hxm9ixGxnsshNLhXVeMa8i6GOSnPdZYdlErIniB0UfzGvvhvHiamqQCWEqx7176c_vEMbRJZuvYpi4kailBC7mb46vEtr')",
                            filter: "brightness(1.05) contrast(1.05)"
                        }}
                    ></div>
                    <div className="absolute bottom-8 right-8 z-20 bg-white/90 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-lg max-w-[200px]">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="material-symbols-outlined text-green-600">trending_up</span>
                            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Efficiency</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-900">+240%</div>
                        <div className="text-xs text-text-secondary mt-1">System optimization rate</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
