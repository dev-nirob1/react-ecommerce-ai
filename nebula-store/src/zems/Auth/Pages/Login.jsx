import { Link } from 'react-router-dom';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { useState } from 'react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login simulation successful!");
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="text-center space-y-4">
                <div className="inline-block p-4 bg-black text-yellow-400 mb-2">
                    <LogIn size={28} />
                </div>
                <h1 className="text-4xl font-black uppercase tracking-tighter text-black leading-none">
                    Welcome <br /> Back.
                </h1>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Enter your credentials to access your account.
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    <div className="flex justify-between items-center">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
                        <Link to="/forgot-password" className="text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-black transition-colors">Forgot?</Link>
                    </div>
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

                <button
                    type="submit"
                    className="w-full bg-black text-white py-6 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl active:scale-95 group"
                >
                    Sign In Now
                </button>
            </form>

            {/* Footer */}
            <div className="pt-6 text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Don't have an account? <br />
                    <Link to="/register" className="text-black font-black underline decoration-gray-200 underline-offset-4 hover:decoration-black transition-all mt-2 inline-block">Create One Today</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

