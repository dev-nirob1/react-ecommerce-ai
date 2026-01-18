const Dashboard = () => {
    const stats = [
        { label: 'Total Revenue', value: '$24,560', change: '+12%', color: 'text-green-600' },
        { label: 'Active Orders', value: '48', change: '+5', color: 'text-yellow-600' },
        { label: 'Total Customers', value: '1,240', change: '+18%', color: 'text-blue-600' },
        { label: 'Conversion Rate', value: '3.4%', change: '-0.2%', color: 'text-red-600' },
    ];

    return (
        <div className="space-y-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white border border-gray-100 p-8 hover:border-black transition-colors group">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">{stat.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-3xl font-black uppercase tracking-tighter text-black">{stat.value}</h3>
                            <span className={`text-[10px] font-black uppercase tracking-widest ${stat.color}`}>{stat.change}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Placeholder Rows */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-100 p-8 space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                        <h3 className="text-sm font-black uppercase tracking-widest text-black">Recent Activity</h3>
                        <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black">View All</button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
                                <div className="h-2 w-2 bg-yellow-400" />
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-gray-900">New Order #NB-992{i} Received</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white border border-gray-100 p-8 space-y-6 flex flex-col items-center justify-center text-center">
                    <div className="h-16 w-16 bg-gray-50 flex items-center justify-center mb-4">
                        <div className="h-6 w-6 border-2 border-black border-dashed rounded-full animate-spin" style={{ borderRadius: '0' }} />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-black">Graphic Insights</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 max-w-[200px]">Advanced charting modules will be integrated here.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
