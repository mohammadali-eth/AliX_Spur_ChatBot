import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ChatWidget } from "components/chat/ChatWidget";

function GridBG() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <svg className="absolute inset-0 h-full w-full opacity-30" width="100%" height="100%">
                <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff30" strokeWidth="0.5" />
                    </pattern>
                    <radialGradient id="fade-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="black" stopOpacity="0" />
                        <stop offset="100%" stopColor="black" stopOpacity="1" />
                    </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                <rect width="100%" height="100%" fill="url(#fade-gradient)" />
            </svg>
        </div>
    );
}

function App() {
    return (
        <TooltipProvider>
            <div className="relative flex h-screen w-full flex-col bg-black font-sans text-zinc-400 selection:bg-white/10 overflow-hidden">
                <GridBG />

                <main className="relative z-10 flex flex-1 items-center justify-center p-4 md:p-8">
                    <div className="relative flex h-full max-h-[800px] w-full max-w-5xl flex-col">
                        {/* Ambient Glow */}
                        <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem] blur-2xl opacity-20" />

                        {/* Interface Shell */}
                        <div className="relative flex flex-1 flex-col overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#080808] shadow-2xl">
                            {/* Top Chrome Highlight */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent z-20" />

                            {/* Header Accent */}
                            <div className="flex items-center justify-between px-8 py-4 border-b border-white/[0.04] bg-white/[0.01]">
                                <div className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-pulse" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Neural Interface</span>
                                </div>
                                <div className="h-px w-12 bg-white/10" />
                            </div>

                            <div className="relative flex-1 min-h-0 flex flex-col">
                                <ChatWidget />
                            </div>

                            {/* Bottom Depth Gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
                        </div>
                    </div>
                </main>
            </div>
        </TooltipProvider>
    );
}

export default App;