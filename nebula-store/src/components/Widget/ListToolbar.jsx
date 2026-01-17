import { Filter, Grid, List, ChevronDown } from 'lucide-react';

/**
 * ListToolbar Widget
 */
const ListToolbar = ({
    view,
    setView,
    onOpenFilter,
    showingCount,
    totalCount
}) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Showing <span className="text-black">{showingCount}</span> of <span className="text-black">{totalCount}</span> Products
            </div>

            <div className="flex items-center gap-6">
                {/* Mobile Filter Toggle */}
                <button
                    onClick={onOpenFilter}
                    className="lg:hidden flex items-center gap-2 text-xs font-black uppercase tracking-widest border border-gray-200 px-4 py-2"
                >
                    <Filter size={14} /> Filter
                </button>

                {/* View Switcher */}
                <div className="hidden md:flex items-center border border-gray-100">
                    <button
                        onClick={() => setView('grid')}
                        className={`p-2 transition-colors ${view === 'grid' ? 'bg-black text-white' : 'hover:bg-gray-50'}`}
                    >
                        <Grid size={18} />
                    </button>
                    <button
                        onClick={() => setView('list')}
                        className={`p-2 transition-colors ${view === 'list' ? 'bg-black text-white' : 'hover:bg-gray-50'}`}
                    >
                        <List size={18} />
                    </button>
                </div>

                {/* Sort Dropdown */}
                <div className="border border-gray-200 px-4 py-2 flex items-center gap-3 cursor-pointer group">
                    <span className="text-xs font-black uppercase tracking-widest">Sort By</span>
                    <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                </div>
            </div>
        </div>
    );
};

export default ListToolbar;
