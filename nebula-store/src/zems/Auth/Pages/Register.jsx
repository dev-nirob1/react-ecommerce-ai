import { Link } from 'react-router-dom';
import { UserPlus, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Registration simulation successful!");
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="text-center space-y-4">
                <div className="inline-block p-4 bg-black text-yellow-400 mb-2">
                    <UserPlus size={28} />
                </div>
                <h1 className="text-4xl font-black uppercase tracking-tighter text-black leading-none">
                    Join the <br /> Galaxy.
                </h1>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Create your account to start your journey.
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">First Name</label>
                        <input
                            required
                            type="text"
                            placeholder="JOHN"
                            className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Last Name</label>
                        <input
                            required
                            type="text"
                            placeholder="DOE"
                            className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                    <input
                        required
                        type="email"
                        placeholder="NAME@EXAMPLE.COM"
                        className="w-full bg-gray-50 border border-gray-100 px-6 py-5 text-sm font-black focus:outline-none focus:border-black transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
                    <div className="relative">
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="w-full bg-gray-50 border border-gray-100 px-6 py-5 text-sm font-black focus:outline-none focus:border-black transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-black"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-100 mb-4">
                    <input required type="checkbox" id="terms" className="mt-1 accent-black h-4 w-4 border-gray-200 outline-none" />
                    <label htmlFor="terms" className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed cursor-pointer">
                        I agree to the <Link to="/terms" className="text-black underline">Terms of Service</Link> and <Link to="/privacy" className="text-black underline">Privacy Policy</Link>.
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-6 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl active:scale-95"
                >
                    Create Account
                </button>
            </form>

            {/* Footer */}
            <div className="pt-6 text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Already an explorer? <br />
                    <Link to="/login" className="text-black font-black underline decoration-gray-200 underline-offset-4 hover:decoration-black transition-all mt-2 inline-block">Sign In Instead</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
