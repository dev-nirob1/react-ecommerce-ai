import { Link } from 'react-router-dom';
import { UserPlus, User, Mail, Phone, Lock } from 'lucide-react';

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Registration simulation successful!");
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="text-center space-y-4">
                <div className="inline-block p-4 bg-black text-blue-400 mb-2">
                    <UserPlus size={28} />
                </div>
                <h1 className="text-4xl font-black uppercase tracking-tighter text-black leading-none">
                    Join The <br /> Nebula.
                </h1>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Create your account to start shopping our curated collection.
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 text-left block">Full Name</label>
                        <div className="relative">
                            <input
                                required
                                type="text"
                                placeholder="AL NIROB"
                                className="w-full bg-gray-50 border border-gray-100 px-6 py-5 pl-14 text-sm font-black focus:outline-none focus:border-black transition-all"
                            />
                            <User size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 text-left block">Phone Number</label>
                        <div className="relative">
                            <input
                                required
                                type="tel"
                                placeholder="+880 1XXX XXXXXX"
                                className="w-full bg-gray-50 border border-gray-100 px-6 py-5 pl-14 text-sm font-black focus:outline-none focus:border-black transition-all"
                            />
                            <Phone size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 text-left block">Email Address</label>
                    <div className="relative">
                        <input
                            required
                            type="email"
                            placeholder="NAME@EXAMPLE.COM"
                            className="w-full bg-gray-50 border border-gray-100 px-6 py-5 pl-14 text-sm font-black focus:outline-none focus:border-black transition-all"
                        />
                        <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 text-left block">Password</label>
                    <div className="relative">
                        <input
                            required
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-gray-50 border border-gray-100 px-6 py-5 pl-14 text-sm font-black focus:outline-none focus:border-black transition-all"
                        />
                        <Lock size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" />
                    </div>
                </div>

                <div className="flex items-center gap-3 py-2">
                    <input type="checkbox" id="terms" required className="w-4 h-4 border-2 border-black rounded-none" />
                    <label htmlFor="terms" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 cursor-pointer">
                        I agree to the <span className="text-black underline">Terms of Service</span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-6 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl active:scale-95 group"
                >
                    Create Account
                </button>
            </form>

            {/* Footer */}
            <div className="pt-6 text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Already part of the Nebula? <br />
                    <Link to="/login" className="text-black font-black underline decoration-gray-200 underline-offset-4 hover:decoration-black transition-all mt-2 inline-block">Sign In To Your Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
