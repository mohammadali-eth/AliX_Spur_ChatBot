import { Sparkles, RotateCcw, MoreHorizontal } from "lucide-react";
import { Button } from "components/ui/button";

interface ChatHeaderProps {
    onNewChat?: () => void;
    isOnline?: boolean;
}

export function ChatHeader({ onNewChat, isOnline = true }: ChatHeaderProps) {
    return (
        <div className="flex justify-between items-center p-6 bg-transparent z-10">
            <div className="flex items-center gap-4">
                {/* Minimal Avatar / Status Group */}
                <div className="relative group cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] flex items-center justify-center border border-[#1a1a1a] group-hover:border-[#333] transition-colors duration-300">
                        <Sparkles className="w-5.5 h-5.5 text-white/40" />
                    </div>
                    {/* Status Dot */}
                    {isOnline && (
                        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#000000] rounded-full flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        </span>
                    )}
                </div>

                {/* Typography / Header Text */}
                <div className="flex flex-col">
                    <h1 className="font-semibold text-[#EDEDED] text-[20px] tracking-wide">
                        AliX
                    </h1>
                    <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-[#555] font-medium tracking-wider uppercase">
                            Quantum AI
                        </span>
                        {isOnline && (
                            <>
                                <span className="w-0.5 h-0.5 rounded-full bg-[#333]" />
                                <span className="text-[10px] text-emerald-500/70 font-medium tracking-wider uppercase">
                                    Online
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-1">
                {onNewChat && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onNewChat}
                        className="text-[#333] hover:text-[#EDEDED] hover:bg-[#111] rounded-lg h-8 w-8 p-0 transition-colors"
                    >
                        <RotateCcw className="w-4 h-4" />
                    </Button>
                )}
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#333] hover:text-[#EDEDED] hover:bg-[#111] rounded-lg h-8 w-8 p-0 transition-colors"
                >
                    <MoreHorizontal className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
}
