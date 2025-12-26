import { Sparkles } from "lucide-react";

export function TypingIndicator() {
    return (
        <div className="flex w-full mb-4 animate-scale-in justify-start">
            <div className="bg-[#050505] border border-[#111] rounded-2xl rounded-tl-sm px-5 py-4 flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#333] animate-[wave_1.2s_ease-in-out_infinite]" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#333] animate-[wave_1.2s_ease-in-out_infinite]" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#333] animate-[wave_1.2s_ease-in-out_infinite]" style={{ animationDelay: "300ms" }} />
            </div>
        </div>
    );
}
