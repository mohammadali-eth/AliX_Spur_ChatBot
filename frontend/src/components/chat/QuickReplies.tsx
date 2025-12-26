import { Button } from "components/ui/button";
import { Package, RefreshCw, Clock, CreditCard, LucideIcon } from "lucide-react";

interface QuickReply {
    icon: LucideIcon;
    label: string;
    message: string;
}

interface QuickRepliesProps {
    onSelect: (text: string) => void;
    disabled?: boolean;
}

const QUICK_REPLIES: QuickReply[] = [
    {
        icon: Package,
        label: "Shipping",
        message: "What are your shipping options and delivery times?",
    },
    {
        icon: RefreshCw,
        label: "Returns",
        message: "What is your return policy?",
    },
    {
        icon: Clock,
        label: "Support Hours",
        message: "What are your customer support hours?",
    },
    {
        icon: CreditCard,
        label: "Payment",
        message: "What payment methods do you accept?",
    },
];

export function QuickReplies({ onSelect, disabled }: QuickRepliesProps) {
    return (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none fade-mask-x justify-center">
            {QUICK_REPLIES.map((reply, index) => {
                const Icon = reply.icon;
                return (
                    <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        disabled={disabled}
                        onClick={() => onSelect(reply.message)}
                        className="group bg-[#0A0A0A] hover:bg-[#151515] text-[#888] hover:text-[#EDEDED] border-[#1a1a1a] hover:border-[#333] rounded-full h-8 px-4 text-xs font-normal transition-all duration-300 flex items-center gap-2"
                    >
                        <Icon size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                        {reply.label}
                    </Button>
                );
            })}
        </div>
    );
}
