import { useRef, useEffect, useCallback } from "react";
import { Loader2 } from "lucide-react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { TypingIndicator } from "./TypingIndicator";
import { QuickReplies } from "./QuickReplies";
import { useChat } from "hooks/useChat";

export function ChatWidget() {
    const { messages, sendMessage, isLoading, isInitializing, handleNewChat } = useChat();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading, scrollToBottom]);

    const showQuickReplies = messages.length === 0 && !isLoading;

    return (
        <div className="flex flex-col h-full relative">
            {/* Header */}
            <ChatHeader onNewChat={messages.length > 0 ? handleNewChat : undefined} />

            {/* Messages area - padded at bottom for floating input */}
            <div className="flex-1 overflow-y-auto chat-scroll p-6 pb-24 space-y-6 min-h-0">
                {isInitializing ? (
                    <div className="flex items-center justify-center h-full">
                        <Loader2 className="w-5 h-5 animate-spin text-neutral-600" />
                    </div>
                ) : messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center px-4 animate-fade-in space-y-4 opacity-0 transition-opacity duration-1000" style={{ opacity: 1 }}>
                        <h2 className="font-medium text-2xl text-[#EDEDED] tracking-tight">
                            AliX <span className="text-[#333]">/</span> Assistant
                        </h2>
                        <p className="text-[#666] text-sm max-w-[260px] leading-relaxed">
                            A pure intelligence interface. Designed for focus and clarity.
                        </p>
                    </div>
                ) : (
                    messages.map((message) => (
                        <ChatMessage
                            key={message.id}
                            sender={message.sender}
                            text={message.text}
                            timestamp={message.timestamp}
                            isNew={message.isNew}
                            isCached={message.isCached}
                        />
                    ))
                )}

                {/* Typing indicator */}
                {isLoading && <TypingIndicator />}

                {/* Scroll anchor */}
                <div ref={messagesEndRef} />
            </div>

            {/* Bottom Interaction Area - Floating Layers */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none fade-mask-bottom">
                {/* Quick replies - Just above input */}
                <div className="pointer-events-auto mb-4">
                    {showQuickReplies && <QuickReplies onSelect={sendMessage} disabled={isLoading} />}
                </div>

                {/* Input Container */}
                <div className="pointer-events-auto">
                    <ChatInput
                        onSend={sendMessage}
                        disabled={isLoading || isInitializing}
                        placeholder={isLoading ? "Processing..." : "Ask anything..."}
                    />
                </div>
            </div>
        </div>
    );
}
