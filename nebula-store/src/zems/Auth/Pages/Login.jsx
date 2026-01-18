import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LogIn, Loader2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '../../../utils/supabaseClient';

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        setAuthError(null);

        try {
            const { data: authData, error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password,
            });

            if (error) throw error;

            console.log('Login successful:', authData);

            // For now, redirect to admin to test (later we will check roles)
            navigate('/admin');
        } catch (error) {
            setAuthError(error.message);
        } finally {
            setIsLoading(false);
        }
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

            {/* Error Message */}
            {authError && (
                <div className="bg-red-50 border border-red-100 p-4 flex items-center gap-3 text-red-600 animate-in shake duration-300">
                    <AlertCircle size={18} />
                    <p className="text-[10px] font-black uppercase tracking-widest leading-tight">{authError}</p>
                </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                    <input
                        {...register('email')}
                        type="email"
                        placeholder="NAME@EXAMPLE.COM"
                        disabled={isLoading}
                        className={`w-full bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-100'} px-6 py-5 text-sm font-black focus:outline-none focus:border-black transition-all disabled:opacity-50`}
                    />
                    {errors.email && (
                        <p className="text-[9px] font-black text-red-500 uppercase tracking-widest">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
                        <Link to="/forgot-password" size={14} className="text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-black transition-colors">Forgot?</Link>
                    </div>
                    <div className="relative">
                        <input
                            {...register('password')}
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            disabled={isLoading}
                            className={`w-full bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-100'} px-6 py-5 text-sm font-black focus:outline-none focus:border-black transition-all disabled:opacity-50`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-black"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-[9px] font-black text-red-500 uppercase tracking-widest">{errors.password.message}</p>
                    )}
                </div>

                <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full bg-black text-white py-6 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl active:scale-95 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            <Loader2 size={18} className="animate-spin text-yellow-400" />
                            Authenticating...
                        </>
                    ) : (
                        "Sign In Now"
                    )}
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
