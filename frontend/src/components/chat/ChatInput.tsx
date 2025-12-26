import { useState, useRef, useEffect } from "react";
import { Button } from "components/ui/button";
import { Textarea } from "components/ui/textarea";
import { ArrowUp } from "lucide-react";
import { cn } from "lib/utils";

interface ChatInputProps {
    onSend: (message: string) => void;
    disabled?: boolean;
    placeholder?: string;
}

export function ChatInput({
    onSend,
    disabled = false,
    placeholder = "Type your message...",
}: ChatInputProps) {
    const [message, setMessage] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = () => {
        const trimmed = message.trim();
        if (trimmed && !disabled) {
            onSend(trimmed);
            setMessage("");
            // Reset textarea height
            if (textareaRef.current) {
                textareaRef.current.style.height = "auto";
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
        }
    }, [message]);

    const isValid = message.trim().length > 0;

    return (
        <div className="relative group w-full">
            <div className="relative flex items-end gap-2 bg-[#000000] border border-[#1a1a1a] p-1.5 pl-4 rounded-3xl shadow-2xl shadow-black ring-1 ring-white/5 focus-within:ring-white/10 transition-all duration-300 input-glow">
                <Textarea
                    ref={textareaRef}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    disabled={disabled}
                    className="min-h-[24px] max-h-[120px] py-3 resize-none border-none bg-transparent text-[#EDEDED] placeholder:text-[#444] placeholder:font-light focus:ring-0 focus:outline-none flex-1 scrollbar-hide text-[15px] leading-relaxed"
                    rows={1}
                />
                <Button
                    onClick={handleSubmit}
                    disabled={disabled || !isValid}
                    size="icon"
                    className={cn(
                        "h-10 w-10 shrink-0 rounded-full transition-all duration-300 mb-0.5 mr-0.5",
                        isValid
                            ? "bg-[#EDEDED] hover:bg-white text-black shadow-lg shadow-white/10 scale-100"
                            : "bg-[#111] text-[#333] scale-90"
                    )}
                >
                    <ArrowUp className="h-5 w-5" />
                    <span className="sr-only">Send</span>
                </Button>
            </div>
        </div>
    );
}
