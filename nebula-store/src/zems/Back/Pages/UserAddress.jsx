import { MapPin, Plus, Trash2, Edit2, Check } from 'lucide-react';

const UserAddress = () => {
    const addresses = [
        { id: 1, type: "Home / Default", name: "Al Hasan Nirob", address: "House 12, Road 5, Block C", area: "Banani, Dhaka", phone: "01712345678", isDefault: true },
        { id: 2, type: "Office", name: "Nirob (Work)", address: "Nebula Core HQ, level 42", area: "Gulshan 2, Dhaka", phone: "01612345678", isDefault: false },
    ];

    return (
        <div className="space-y-10">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Saved Addresses</h2>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Manage your shipping destinations.</p>
                </div>
                <button className="bg-black text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-gray-800 transition-all shadow-xl active:scale-95">
                    <Plus size={16} /> Add New Address
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {addresses.map((addr) => (
                    <div key={addr.id} className={`bg-white border p-10 space-y-6 relative transition-all group ${addr.isDefault ? 'border-black shadow-lg' : 'border-gray-100 hover:border-black'}`}>
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 ${addr.isDefault ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
                                    {addr.type}
                                </span>
                                <h4 className="text-lg font-black uppercase tracking-tight text-black mt-2">{addr.name}</h4>
                            </div>
                            {addr.isDefault && (
                                <div className="h-8 w-8 bg-green-500 text-white flex items-center justify-center">
                                    <Check size={16} />
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-bold text-gray-600 uppercase tracking-wide leading-relaxed">
                                {addr.address} <br />
                                {addr.area}
                            </p>
                            <p className="text-[10px] font-black text-black">PHONE: {addr.phone}</p>
                        </div>

                        <div className="pt-6 border-t border-gray-50 flex gap-6">
                            <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-black hover:underline">
                                <Edit2 size={12} /> Edit
                            </button>
                            {!addr.isDefault && (
                                <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-red-500 hover:underline">
                                    <Trash2 size={12} /> Delete
                                </button>
                            )}
                            {!addr.isDefault && (
                                <button className="ml-auto text-[9px] font-black uppercase tracking-widest text-gray-300 hover:text-black transition-colors">
                                    Set as Default
                                </button>
                            )}
                        </div>

                        {!addr.isDefault && <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity"><MapPin size={20} className="text-gray-200" /></div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserAddress;
