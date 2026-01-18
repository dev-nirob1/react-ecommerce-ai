import { BarChart3, TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Download, Calendar } from 'lucide-react';

const Reports = () => {
    const kpis = [
        { label: 'Net Revenue', value: '$84,200', change: '+14%', trend: 'up' },
        { label: 'Avg. Order Value', value: '$245.00', change: '-4%', trend: 'down' },
        { label: 'CAC (Acquisition)', value: '$12.00', change: '+1.5%', trend: 'up' },
        { label: 'Total Sales', value: '1,240', change: '+22%', trend: 'up' },
    ];

    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-black">Business Analytics</h2>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Deep insights into your cosmic operation.</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-3 px-8 py-5 bg-white border border-gray-100 text-[10px] font-black uppercase tracking-widest hover:border-black transition-all">
                        <Calendar size={16} /> Last 30 Days
                    </button>
                    <button className="flex items-center gap-3 px-8 py-5 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl">
                        <Download size={16} /> Export PDF Report
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {kpis.map((kpi, i) => (
                    <div key={i} className="bg-white border border-gray-100 p-8 hover:border-black transition-all group">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors">{kpi.label}</span>
                            {kpi.trend === 'up' ? <TrendingUp size={18} className="text-green-500" /> : <TrendingDown size={18} className="text-red-500" />}
                        </div>
                        <h3 className="text-3xl font-black text-black tracking-tighter">{kpi.value}</h3>
                        <p className={`text-[10px] font-black uppercase tracking-widest mt-2 ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            {kpi.change} vs Last Month
                        </p>
                    </div>
                ))}
            </div>

            {/* Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-black text-white p-12 min-h-[400px] flex flex-col justify-between relative overflow-hidden group">
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-2">Revenue Growth Line</h4>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">January - October 2023</p>
                    </div>
                    {/* Visual representation of a chart (Mock) */}
                    <div className="flex items-end gap-2 h-48 mt-10">
                        {[40, 60, 45, 80, 55, 90, 75, 100, 85, 110].map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-white/10 hover:bg-yellow-400 transition-colors cursor-pointer group/bar relative"
                                style={{ height: `${h}%` }}
                            >
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 text-[8px] font-black opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                                    ${h}K
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute right-[-50px] top-[-50px] text-[15rem] font-black text-white/[0.03] select-none pointer-events-none">DATA</div>
                </div>

                <div className="bg-white border border-gray-100 p-12 space-y-10 flex flex-col justify-center text-center">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-10">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className={`h-20 w-20 border-8 border-gray-100 flex items-center justify-center font-black text-xs ${i === 1 ? 'border-t-black' : i === 2 ? 'border-r-black border-t-black' : ''}`} style={{ borderRadius: '0' }} />
                                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 mt-4">Metric {i}</span>
                                </div>
                            ))}
                        </div>
                        <h4 className="text-base font-black uppercase tracking-widest text-black">Traffic Distribution</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 max-w-[200px] mx-auto">Desktop (64%), Mobile (28%), Others (8%)</p>
                    </div>
                </div>
            </div>

            {/* Best Sellers */}
            <div className="bg-white border border-gray-100 p-10 space-y-8">
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-black border-b border-gray-50 pb-6">Top Performing Products (This Week)</h4>
                <div className="space-y-6">
                    {[
                        { name: 'Neural Link v2', sales: '840 units', growth: '+15.4%' },
                        { name: 'Nebula Glass Air', sales: '620 units', growth: '+2.1%' },
                        { name: 'Void Pro Audio', sales: '410 units', growth: '-5.2%' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                            <div className="flex items-center gap-6">
                                <span className="text-xl font-black text-gray-200">0{i + 1}</span>
                                <p className="text-sm font-black uppercase tracking-tight text-black">{item.name}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-black text-black">{item.sales}</p>
                                <p className={`text-[9px] font-black uppercase tracking-widest mt-1 ${item.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{item.growth}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reports;
