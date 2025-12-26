import { cn } from "lib/utils";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
    sender: "user" | "ai";
    text: string;
    timestamp?: string;
    isNew?: boolean;
    isCached?: boolean;
}

export function ChatMessage({
    sender,
    text,
    timestamp,
    isNew = false,
    isCached,
}: ChatMessageProps) {
    const isUser = sender === "user";

    return (
        <div
            className={cn(
                "flex w-full mb-2 animate-message-appear",
                isUser ? "justify-end" : "justify-start"
            )}
        >
            <div
                className={cn(
                    "max-w-[85%] relative group px-5 py-3.5 transition-all duration-300",
                    isUser
                        ? "bg-[#111111] text-[#EDEDED] rounded-2xl rounded-tr-sm border border-[#222] hover:border-[#333]"
                        : "bg-[#050505] text-[#D1D1D1] rounded-2xl rounded-tl-sm border border-[#111] hover:border-[#1a1a1a]"
                )}
            >
                {/* Content */}
                <div className="text-sm font-light leading-relaxed tracking-wide">
                    {isUser ? (
                        <p>{text}</p>
                    ) : (
                        <div className="prose prose-sm prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-[#000000] prose-pre:border prose-pre:border-[#1a1a1a] prose-strong:text-white prose-a:text-white/60">
                            <ReactMarkdown>{text}</ReactMarkdown>
                        </div>
                    )}
                </div>

                {/* Metadata - Only visible on hover/focus to keep it clean */}
                <div
                    className={cn(
                        "absolute -bottom-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-1",
                        isUser ? "right-0 flex-row-reverse" : "left-0"
                    )}
                >
                    {timestamp && (
                        <span className="text-[9px] font-medium text-[#444] uppercase tracking-widest">
                            {timestamp}
                        </span>
                    )}
                    {!isUser && isCached && (
                        <span className="text-[9px] text-[#333] border border-[#222] px-1 rounded bg-black">
                            Cached
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
