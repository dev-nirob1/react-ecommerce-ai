import { Truck } from 'lucide-react';

const PaymentMethods = ({ selectedMethod, setSelectedMethod }) => {
    const methods = [
        { id: 'cod', name: 'Cash on Delivery', description: 'Pay when you receive', icon: <Truck size={20} /> },
        { id: 'bkash', name: 'bKash (Manual)', description: 'Manual Verification', color: 'text-[#e2136e]', brand: 'bKash', number: '01712345678' },
        { id: 'nagad', name: 'Nagad (Manual)', description: 'Manual Verification', color: 'text-[#f58220]', brand: 'Nagad', number: '01812345678' },
        { id: 'rocket', name: 'Rocket (Manual)', description: 'Manual Verification', color: 'text-[#8c3494]', brand: 'Rocket', number: '01912345678' },
    ];

    const currentMethod = methods.find(m => m.id === selectedMethod);

    return (
        <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 pb-4">Payment Method</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                {methods.map((method) => (
                    <button
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={`flex items-center gap-4 p-5 border transition-all text-left ${selectedMethod === method.id
                                ? 'border-black bg-black text-white shadow-xl'
                                : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-black'
                            }`}
                    >
                        <div className={`shrink-0 flex items-center justify-center ${selectedMethod === method.id ? 'text-yellow-400' : 'text-gray-300'}`}>
                            {method.icon || <span className={`text-[10px] font-black italic ${selectedMethod === method.id ? 'text-yellow-400' : method.color}`}>{method.brand}</span>}
                        </div>
                        <div>
                            <span className="block text-[11px] font-black uppercase tracking-widest">{method.name}</span>
                            <span className={`text-[9px] uppercase font-bold ${selectedMethod === method.id ? 'text-gray-400' : 'text-gray-300'}`}>{method.description}</span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Conditional Manual Payment UI */}
            {selectedMethod !== 'cod' && (
                <div className="p-8 border border-black bg-white space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    {/* Instructions */}
                    <div className="space-y-3 pb-6 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Payment Instructions</span>
                            <span className={`text-[10px] font-black italic ${currentMethod?.color}`}>{currentMethod?.brand}</span>
                        </div>
                        <p className="text-sm font-bold text-gray-900 leading-relaxed">
                            Please send the exact order amount to the following number via "Send Money" or "Cash Out":
                        </p>
                        <div className="flex items-center gap-4 bg-gray-50 p-4 border border-gray-100">
                            <div className="flex-1">
                                <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Our {currentMethod?.brand} Number</span>
                                <span className="text-lg font-black tracking-[0.2em] text-black">{currentMethod?.number}</span>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Merchant/Personal</span>
                        </div>
                    </div>

                    {/* Inputs for Verification */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your {currentMethod?.brand} Number</label>
                            <input required type="text" placeholder="01XXXXXXXXX" className="w-full bg-gray-50 border border-gray-100 px-4 py-4 text-sm font-black tracking-widest focus:outline-none focus:border-black" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Transaction ID (TrxID)</label>
                            <input required type="text" placeholder="8N7X..." className="w-full bg-gray-50 border border-gray-100 px-4 py-4 text-sm font-black tracking-[0.1em] focus:outline-none focus:border-black uppercase underline decoration-gray-200" />
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-yellow-50/50 border border-yellow-100">
                        <div className="text-yellow-600 font-black text-xs uppercase tracking-widest">Note:</div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                            Our team will verify your transaction manually. Processing may take 30-60 minutes during business hours.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentMethods;
