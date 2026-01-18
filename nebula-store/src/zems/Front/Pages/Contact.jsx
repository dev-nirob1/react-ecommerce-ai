import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import PageHeader from '../../../components/Widget/PageHeader';

const Contact = () => {
    const handleSumbit = (e) => {
        e.preventDefault();
        alert("Message sent! (Mock)");
    };

    return (
        <div className="bg-white min-h-screen pb-20">
            <PageHeader title="Contact Us" breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact', path: null }]} />

            <div className="container mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left: Contact Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Get in Touch</span>
                            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black leading-none">
                                We'd love to <br /> hear from you.
                            </h2>
                            <p className="text-gray-500 max-w-sm leading-relaxed">
                                Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
                            <div className="flex gap-6">
                                <div className="p-4 bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 h-14 w-14">
                                    <MapPin size={24} className="text-black" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Our Studio</h4>
                                    <p className="text-sm font-bold text-gray-900 leading-relaxed">
                                        123 Nebula Street, Digital Galaxy <br /> New York, NY 10001
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="p-4 bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 h-14 w-14">
                                    <Phone size={24} className="text-black" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Call Us</h4>
                                    <p className="text-sm font-bold text-gray-900 leading-relaxed">
                                        +1 (234) 567 890 <br /> +1 (234) 987 654
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="p-4 bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 h-14 w-14">
                                    <Mail size={24} className="text-black" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Email Support</h4>
                                    <p className="text-sm font-bold text-gray-900 leading-relaxed">
                                        support@nebulastore.com <br /> help@nebulastore.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="p-4 bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 h-14 w-14">
                                    <Clock size={24} className="text-black" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Working Hours</h4>
                                    <p className="text-sm font-bold text-gray-900 leading-relaxed">
                                        Mon - Fri: 09:00 - 20:00 <br /> Sat - Sun: 10:00 - 18:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-7 bg-gray-50 border border-gray-100 p-8 lg:p-12">
                        <div className="mb-10">
                            <h3 className="text-xl font-black uppercase tracking-tight text-black mb-2">Send us a message</h3>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Our team usually responds within 24 hours.</p>
                        </div>

                        <form onSubmit={handleSumbit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Your Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subject / Category</label>
                                    <select
                                        required
                                        className="w-full bg-white border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="">Select a Category</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="billing">Billing & Payments</option>
                                        <option value="complaint">Complaint Box</option>
                                        <option value="tracking">Order Tracking</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Order ID (Optional)</label>
                                    <input
                                        type="text"
                                        placeholder="#NB-12345"
                                        className="w-full bg-white border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Your Message</label>
                                <textarea
                                    required
                                    rows="6"
                                    placeholder="Tell us what's on your mind..."
                                    className="w-full bg-white border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-6 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl active:scale-95 group"
                            >
                                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                            <p className="text-[10px] text-gray-400 text-center font-bold uppercase tracking-widest">
                                By clicking send, you agree to our privacy policy.
                            </p>
                        </form>
                    </div>

                </div>
            </div>

            {/* Google Map Mockup */}
            <div className="container mx-auto px-6 mb-12">
                <div className="w-full h-96 bg-gray-100 flex items-center justify-center border border-gray-100 grayscale opacity-60">
                    <div className="text-center space-y-4">
                        <MapPin size={48} className="mx-auto text-gray-300" />
                        <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Interactive Map Integration</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
