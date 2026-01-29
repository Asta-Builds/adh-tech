export default function Partners() {
    return (
        <section className="w-full border-y border-slate-200 bg-background-subtle py-10">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
                    <h3 className="text-lg font-bold text-text-main whitespace-nowrap lg:border-r lg:border-slate-300 lg:pr-8">
                        Partnering with Visionaries
                    </h3>
                    <div className="flex flex-wrap justify-center lg:justify-end gap-8 lg:gap-12 w-full">
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-400 grayscale hover:text-primary hover:grayscale-0 transition-all cursor-pointer">
                            <span className="material-symbols-outlined">change_history</span> Vertex
                        </div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-400 grayscale hover:text-primary hover:grayscale-0 transition-all cursor-pointer">
                            <span className="material-symbols-outlined">all_inclusive</span> LoopScale
                        </div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-400 grayscale hover:text-primary hover:grayscale-0 transition-all cursor-pointer">
                            <span className="material-symbols-outlined">hexagon</span> HexaTech
                        </div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-400 grayscale hover:text-primary hover:grayscale-0 transition-all cursor-pointer">
                            <span className="material-symbols-outlined">waves</span> Pulse
                        </div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-400 grayscale hover:text-primary hover:grayscale-0 transition-all cursor-pointer">
                            <span className="material-symbols-outlined">bolt</span> SparkIO
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
