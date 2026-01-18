import { Search, Send, Clock, AlertTriangle, CheckCircle, MoreVertical, MessageSquare } from 'lucide-react';

const Support = () => {
    const tickets = [
        { id: "#TK-0012", user: "Tony Montana", subject: "Payment Failed", type: "Billing", priority: "High", time: "10m ago", status: "Open" },
        { id: "#TK-0011", user: "Bruce Wayne", subject: "Cave delivery issue", type: "Shipping", priority: "Medium", time: "2h ago", status: "In Progress" },
        { id: "#TK-0010", user: "Diana Prince", subject: "Item damaged", type: "Complaint", priority: "Critical", time: "3h ago", status: "Open" },
        { id: "#TK-0009", user: "Arthur Curry", subject: "Waterproof test", type: "Inquiry", priority: "Low", time: "1d ago", status: "Resolved" },
    ];

    const getPriorityColor = (p) => {
        switch (p) {
            case 'Critical': return 'text-red-600 bg-red-50';
            case 'High': return 'text-orange-600 bg-orange-50';
            case 'Medium': return 'text-yellow-600 bg-yellow-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="h-[calc(100vh-160px)] flex flex-col gap-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Support Desk</h2>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total 08 active tickets in the galaxy.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-4 bg-gray-50 text-[10px] font-black uppercase tracking-widest border border-gray-100 hover:border-black transition-all">Archived</button>
                    <button className="px-8 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest shadow-xl active:scale-95">Settings</button>
                </div>
            </div>

            <div className="flex-1 flex gap-8 overflow-hidden">
                {/* Left: Ticket List */}
                <div className="w-1/3 flex flex-col border border-gray-100 bg-white">
                    <div className="p-6 border-b border-gray-50 bg-gray-50/30">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                            <input type="text" placeholder="Find ticket..." className="w-full bg-white border border-gray-100 pl-12 pr-4 py-3 text-xs font-bold focus:outline-none focus:border-black" />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
                        {tickets.map((t) => (
                            <div key={t.id} className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors relative group ${t.id === '#TK-0012' ? 'bg-black text-white' : ''}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <span className={`text-[9px] font-black tracking-widest uppercase ${t.id === '#TK-0012' ? 'text-gray-500' : 'text-gray-400'}`}>{t.id}</span>
                                    <span className={`text-[9px] font-black px-2 py-0.5 ${getPriorityColor(t.priority)}`}>{t.priority}</span>
                                </div>
                                <h4 className={`text-xs font-black uppercase tracking-tight mb-1 truncate ${t.id === '#TK-0012' ? 'text-white' : 'text-black'}`}>{t.subject}</h4>
                                <div className="flex justify-between items-center mt-4">
                                    <span className={`text-[10px] font-bold ${t.id === '#TK-0012' ? 'text-gray-400' : 'text-gray-500'}`}>{t.user}</span>
                                    <span className="text-[9px] font-bold uppercase text-gray-400 italic">{t.time}</span>
                                </div>
                                {t.id === '#TK-0012' && <div className="absolute left-0 top-0 h-full w-1 bg-yellow-400" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Conversation Thread */}
                <div className="flex-1 border border-gray-100 bg-white flex flex-col">
                    <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/20">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-black text-yellow-400 border border-black"><MessageSquare size={18} /></div>
                            <div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-black">#TK-0012: Payment Failed</h3>
                                <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">From: Tony Montana • Category: Billing</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-3 text-gray-300 hover:text-green-600 transition-colors"><CheckCircle size={20} /></button>
                            <button className="p-3 text-gray-300 hover:text-black transition-colors"><MoreVertical size={20} /></button>
                        </div>
                    </div>

                    <div className="flex-1 p-8 overflow-y-auto space-y-8">
                        {/* Mock Messages */}
                        <div className="flex gap-4 max-w-[80%]">
                            <div className="h-10 w-10 bg-gray-900 text-white flex items-center justify-center shrink-0 font-black text-xs">T</div>
                            <div className="bg-gray-100 p-6 space-y-2">
                                <p className="text-xs font-bold leading-relaxed text-gray-600">
                                    "I tried to pay with bKash for the Neural Link v2, but the TrxID was rejected as already used. Please check my status."
                                </p>
                                <p className="text-[9px] font-black text-gray-400">10:45 AM</p>
                            </div>
                        </div>

                        <div className="flex flex-row-reverse gap-4 max-w-[80%] ml-auto text-right">
                            <div className="h-10 w-10 bg-yellow-400 text-black flex items-center justify-center shrink-0 font-black text-xs">A</div>
                            <div className="bg-black text-white p-6 space-y-2 text-left">
                                <p className="text-xs font-bold leading-relaxed opacity-80 uppercase tracking-wide">
                                    "Hello Mr. Montana, we are checking the manual verification logs. Please hold for a moment."
                                </p>
                                <p className="text-[9px] font-black text-gray-600 italic">10:52 AM</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 border-t border-gray-50">
                        <div className="relative">
                            <textarea placeholder="Write your response..." className="w-full bg-gray-50 border border-gray-100 p-6 pr-24 text-xs font-bold focus:outline-none focus:border-black resize-none min-h-[100px]"></textarea>
                            <button className="absolute bottom-6 right-6 p-4 bg-black text-white hover:bg-gray-800 transition-all shadow-xl active:scale-95 group">
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
