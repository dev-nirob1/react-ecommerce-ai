import { Link } from 'react-router-dom';
import { KeyRound, ArrowRight } from 'lucide-react';

const ForgotPassword = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reset link sent! (Mock)");
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="text-center space-y-4">
                <div className="inline-block p-4 bg-black text-yellow-400 mb-2">
                    <KeyRound size={28} />
                </div>
                <h1 className="text-4xl font-black uppercase tracking-tighter text-black leading-none">
                    Restore <br /> Access.
                </h1>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Enter your email to receive a recovery link.
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

                <button
                    type="submit"
                    className="w-full bg-black text-white py-6 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl active:scale-95 group"
                >
                    Send Reset Link <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>

            {/* Footer */}
            <div className="pt-6 text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Remembered your password? <br />
                    <Link to="/login" className="text-black font-black underline decoration-gray-200 underline-offset-4 hover:decoration-black transition-all mt-2 inline-block">Back to Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
