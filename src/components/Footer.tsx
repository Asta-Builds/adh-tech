export default function Footer() {
    return (
        <footer className="mt-auto border-t border-slate-200 bg-background-subtle pt-16 pb-8">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-slate-900">
                            <div className="flex items-center justify-center size-8 rounded bg-primary text-white">
                                <span className="material-symbols-outlined text-[20px]">dataset</span>
                            </div>
                            <h3 className="text-xl font-bold">ADH-Tech</h3>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Pioneering the digital landscape with bespoke technological solutions that drive progress.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                            <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
                            <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">rss_feed</span></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-4">Services</h4>
                        <ul className="flex flex-col gap-2 text-sm text-text-secondary">
                            <li><a className="hover:text-primary transition-colors" href="#">AI & Machine Learning</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Cloud Architecture</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Cybersecurity</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Blockchain Dev</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-4">Company</h4>
                        <ul className="flex flex-col gap-2 text-sm text-text-secondary">
                            <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Case Studies</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-4">Stay Updated</h4>
                        <p className="text-xs text-text-secondary mb-4">Latest tech trends directly to your inbox.</p>
                        <form className="flex flex-col gap-2">
                            <input className="bg-white border border-slate-300 rounded px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors shadow-sm" placeholder="Enter your email" type="email" />
                            <button className="bg-primary text-white text-sm font-bold py-2 rounded hover:bg-blue-700 transition-colors shadow-sm cursor-pointer" type="button">Subscribe</button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">© 2024 ADH-Tech. All rights reserved.</p>
                    <div className="flex gap-6 text-xs text-slate-500">
                        <a className="hover:text-slate-900" href="#">Privacy Policy</a>
                        <a className="hover:text-slate-900" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
