import { X } from 'lucide-react';

/**
 * FilterSidebar Widget
 */
const FilterSidebar = ({
    isOpen,
    onClose,
    categories,
    brands,
    selectedCategory,
    setSelectedCategory
}) => {
    return (
        <aside className={`fixed inset-0 z-50 lg:relative lg:z-0 lg:w-[280px] bg-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
            <div className="h-full overflow-y-auto lg:overflow-visible p-6 lg:p-0">

                {/* Mobile Close Button */}
                <div className="flex lg:hidden justify-between items-center mb-10">
                    <span className="text-lg font-black uppercase">Filters</span>
                    <button onClick={onClose}><X size={24} /></button>
                </div>

                <div className="space-y-12">
                    {/* Categories */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-4">Categories</h4>
                        <ul className="space-y-4">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`text-sm font-bold uppercase transition-all duration-300 hover:tracking-widest ${selectedCategory === cat ? 'text-black tracking-widest' : 'text-gray-400'}`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Range */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-4">Price Range</h4>
                        <div className="space-y-4">
                            <input type="range" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black" />
                            <div className="flex justify-between text-xs font-bold text-gray-500">
                                <span>$0</span>
                                <span>$1000+</span>
                            </div>
                        </div>
                    </div>

                    {/* Brands */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-4">Brands</h4>
                        <div className="space-y-3">
                            {brands.map((brand) => (
                                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 border-2 border-gray-200 rounded-none checked:bg-black transition-all" />
                                    <span className="text-sm font-bold text-gray-400 group-hover:text-black transition-colors">{brand}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default FilterSidebar;
