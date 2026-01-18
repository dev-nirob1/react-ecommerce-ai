import { useState } from 'react';
import {
    Globe,
    CreditCard,
    Truck,
    Bell,
    ShieldCheck,
    Save,
    Image as ImageIcon
} from 'lucide-react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'General', icon: <Globe size={18} /> },
        { id: 'payments', label: 'Payments', icon: <CreditCard size={18} /> },
        { id: 'shipping', label: 'Shipping', icon: <Truck size={18} /> },
        { id: 'security', label: 'Security', icon: <ShieldCheck size={18} /> },
    ];

    return (
        <div className="space-y-10">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-black mb-2">Store Settings</h2>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Configure your global store preferences and integrations.</p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-px">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            flex items-center gap-3 px-8 py-5 text-[10px] font-black uppercase tracking-widest transition-all relative
                            ${activeTab === tab.id ? 'bg-black text-white' : 'bg-white text-gray-400 hover:text-black'}
                        `}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Config Content */}
            <div className="bg-white border border-gray-100 p-8 lg:p-12 space-y-12">

                {/* 1. General Settings */}
                {activeTab === 'general' && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-left-4 duration-500">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            <div className="space-y-2">
                                <h4 className="text-xs font-black uppercase tracking-widest text-black">Store Information</h4>
                                <p className="text-[10px] font-bold text-gray-400 uppercase leading-relaxed">Public identity of your store used in SEO and emails.</p>
                            </div>
                            <div className="lg:col-span-2 space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Store Name</label>
                                    <input type="text" defaultValue="NEBULA STORE" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Support Email</label>
                                    <input type="email" defaultValue="support@nebulastore.com" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Currency</label>
                                        <select className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all appearance-none cursor-pointer">
                                            <option>USD ($)</option>
                                            <option>BDT (৳)</option>
                                            <option>EUR (€)</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Timezone</label>
                                        <select className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all appearance-none cursor-pointer">
                                            <option>GMT+6 (Dhaka)</option>
                                            <option>UTC (London)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gray-50" />

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            <div className="space-y-2">
                                <h4 className="text-xs font-black uppercase tracking-widest text-black">Branding</h4>
                                <p className="text-[10px] font-bold text-gray-400 uppercase leading-relaxed">Update your visual assets for the storefront.</p>
                            </div>
                            <div className="lg:col-span-2 flex items-center gap-10">
                                <div className="w-32 h-32 bg-black flex flex-col items-center justify-center text-white space-y-2 border-2 border-dashed border-gray-700">
                                    <ImageIcon size={24} className="opacity-50" />
                                    <span className="text-[8px] font-black tracking-widest uppercase">LOGO (W)</span>
                                </div>
                                <div className="space-y-4">
                                    <button className="px-8 py-4 bg-gray-50 border border-gray-100 text-[10px] font-black uppercase tracking-widest hover:border-black transition-all">Upload New Logo</button>
                                    <p className="text-[9px] text-gray-400 uppercase font-black">Recommended: SVG or 500x500px </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. Payment Settings (Bangladeshi Focus) */}
                {activeTab === 'payments' && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-left-4 duration-500">
                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-widest text-black border-b border-gray-50 pb-4">Manual Mobile Banking Configuration</h4>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {['bKash', 'Nagad', 'Rocket'].map(method => (
                                    <div key={method} className="bg-gray-50 border border-gray-100 p-6 space-y-4">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-black">{method} Details</span>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Account Number</label>
                                            <input type="text" placeholder="01XXXXXXXXX" className="w-full bg-white border border-gray-100 px-4 py-3 text-xs font-black focus:outline-none focus:border-black transition-all" />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <input type="checkbox" className="h-4 w-4 accent-black" />
                                            <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Enable Method</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-widest text-black border-b border-gray-50 pb-4">Automatic Gateway Integration</h4>
                            <div className="bg-yellow-50/50 border border-yellow-100 p-6 flex items-start gap-4">
                                <ShieldCheck size={20} className="text-yellow-600 shrink-0" />
                                <div className="space-y-1">
                                    <p className="text-xs font-black uppercase tracking-widest text-black">SSLCommerz / Shurjopay Integration</p>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">API keys are required to process payments automatically.</p>
                                </div>
                                <button className="ml-auto px-6 py-3 bg-black text-white text-[9px] font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all">Setup Gateway</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. Shipping Settings */}
                {activeTab === 'shipping' && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-left-4 duration-500">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 border-b border-gray-50 pb-10">
                            <div className="space-y-2">
                                <h4 className="text-xs font-black uppercase tracking-widest text-black">Delivery Zones</h4>
                                <p className="text-[10px] font-bold text-gray-400 uppercase leading-relaxed">Define where you deliver and at what cost.</p>
                            </div>
                            <div className="lg:col-span-2 space-y-4">
                                <div className="flex items-center justify-between p-6 bg-white border border-gray-100 hover:border-black transition-all">
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-black">Inside Dhaka</p>
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-1">Flat Rate: ৳80.00 • 1-2 Days</p>
                                    </div>
                                    <button className="text-[10px] font-black underline uppercase tracking-widest">Edit</button>
                                </div>
                                <div className="flex items-center justify-between p-6 bg-white border border-gray-100 hover:border-black transition-all">
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-black">Outside Dhaka (National)</p>
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-1">Flat Rate: ৳150.00 • 3-5 Days</p>
                                    </div>
                                    <button className="text-[10px] font-black underline uppercase tracking-widest">Edit</button>
                                </div>
                                <button className="w-full py-4 border-2 border-dashed border-gray-200 text-[10px] font-black uppercase tracking-widest text-gray-300 hover:border-black hover:text-black transition-all">
                                    + Add New Zone
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer Actions */}
                <div className="pt-10 flex gap-4">
                    <button className="bg-black text-white px-10 py-5 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-4 hover:bg-gray-800 transition-all shadow-xl active:scale-95">
                        <Save size={18} /> Update Settings
                    </button>
                    <button className="px-10 py-5 text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-all">
                        Reset Defaults
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Settings;
