import { Outlet, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            {/* Header / Home Link */}
            <div className="p-8 lg:absolute lg:top-0 lg:left-0 z-10 w-full lg:w-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-all group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Store
                </Link>
            </div>

            <main className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="w-full max-w-md">
                    <Outlet />
                </div>
            </main>

            {/* Subtle Brand Footer */}
            <footer className="p-8 text-center bg-white">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-200 select-none">Nebula Systems // Premium Core</p>
            </footer>
        </div>
    );
};

export default AuthLayout;
