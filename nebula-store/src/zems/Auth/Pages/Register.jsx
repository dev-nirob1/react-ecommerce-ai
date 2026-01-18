import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '../../../utils/supabaseClient';

const registerSchema = z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    terms: z.boolean().refine(val => val === true, 'You must accept the terms'),
});

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            terms: false
        }
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        setAuthError(null);

        try {
            // 1. Sign up user via Supabase Auth
            const { data: authData, error: signUpError } = await supabase.auth.signUp({
                email: data.email,
                password: data.password,
                options: {
                    data: {
                        first_name: data.firstName,
                        last_name: data.lastName,
                    }
                }
            });

            if (signUpError) throw signUpError;

            // 2. Create the profile in the public 'profiles' table
            // Note: We'll assume the SQL Trigger is set up or we do it manually here
            // For safety, let's do a manual insert if the trigger isn't ready
            const { error: profileError } = await supabase
                .from('profiles')
                .insert([
                    {
                        id: authData.user.id,
                        full_name: `${data.firstName} ${data.lastName}`,
                        role: 'customer', // Default role
                    }
                ]);

            if (profileError) {
                // If profile creation fails, we might want to log it, 
                // but the user is still 'registered' in auth.
                console.error('Profile creation error:', profileError);
            }

            console.log('Registration successful');
            alert("Registration successful! Please check your email for verification.");
            navigate('/login');
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
                    <UserPlus size={28} />
                </div>
                <h1 className="text-4xl font-black uppercase tracking-tighter text-black leading-none">
                    Join the <br /> Galaxy.
                </h1>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Create your account to start your journey.
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
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">First Name</label>
                        <input
                            {...register('firstName')}
                            type="text"
                            placeholder="JOHN"
                            disabled={isLoading}
                            className={`w-full bg-gray-50 border ${errors.firstName ? 'border-red-500' : 'border-gray-100'} px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all disabled:opacity-50`}
                        />
                        {errors.firstName && (
                            <p className="text-[9px] font-black text-red-500 uppercase tracking-widest">{errors.firstName.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Last Name</label>
                        <input
                            {...register('lastName')}
                            type="text"
                            placeholder="DOE"
                            disabled={isLoading}
                            className={`w-full bg-gray-50 border ${errors.lastName ? 'border-red-500' : 'border-gray-100'} px-6 py-4 text-sm font-black focus:outline-none focus:border-black transition-all disabled:opacity-50`}
                        />
                        {errors.lastName && (
                            <p className="text-[9px] font-black text-red-500 uppercase tracking-widest">{errors.lastName.message}</p>
                        )}
                    </div>
                </div>

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
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
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

                <div className={`flex items-start gap-4 p-4 bg-gray-50 border ${errors.terms ? 'border-red-200' : 'border-gray-100'} mb-4`}>
                    <input
                        {...register('terms')}
                        type="checkbox"
                        id="terms"
                        className="mt-1 accent-black h-4 w-4 border-gray-200 outline-none"
                    />
                    <label htmlFor="terms" className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed cursor-pointer">
                        I agree to the <Link to="/terms" className="text-black underline">Terms of Service</Link> and <Link to="/privacy" className="text-black underline">Privacy Policy</Link>.
                    </label>
                </div>
                {errors.terms && (
                    <p className="text-[9px] font-black text-red-500 uppercase tracking-widest -mt-4 mb-4">{errors.terms.message}</p>
                )}

                <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full bg-black text-white py-6 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            <Loader2 size={18} className="animate-spin text-yellow-400" />
                            Creating Account...
                        </>
                    ) : (
                        "Create Account"
                    )}
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
