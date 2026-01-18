import { Save, User, Mail, Phone, Lock } from 'lucide-react';

const UserProfile = () => {
    return (
        <div className="max-w-4xl space-y-12">
            <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Profile Management</h2>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Control your digital presence and security.</p>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-black border-b border-gray-100 pb-4">Personal Information</h4>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                <input type="text" defaultValue="Nirob Al Hasan" className="w-full bg-white border border-gray-100 px-14 py-4 text-xs font-black focus:outline-none focus:border-black transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                <input type="email" defaultValue="nirob@example.com" className="w-full bg-gray-50 border border-gray-100 px-14 py-4 text-xs font-black opacity-60 cursor-not-allowed" disabled />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                <input type="text" defaultValue="+880 1712 345678" className="w-full bg-white border border-gray-100 px-14 py-4 text-xs font-black focus:outline-none focus:border-black transition-all" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-black border-b border-gray-100 pb-4">Security</h4>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Current Password</label>
                            <div className="relative">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                                <input type="password" placeholder="••••••••" className="w-full bg-white border border-gray-100 px-14 py-4 text-xs font-black focus:outline-none focus:border-black transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">New Password</label>
                            <input type="password" placeholder="MIN 8 CHARACTERS" className="w-full bg-white border border-gray-100 px-6 py-4 text-xs font-black focus:outline-none focus:border-black transition-all" />
                        </div>
                        <button className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors underline">Forgot your old password?</button>
                    </div>
                </div>
            </div>

            <div className="pt-10 flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-12 py-5 text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-gray-800 transition-all shadow-xl active:scale-95">
                    <Save size={18} /> Update Profile
                </button>
                <button className="px-12 py-5 text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:text-red-500 transition-all">
                    Deactivate Account
                </button>
            </div>
        </div>
    );
};

export default UserProfile;
