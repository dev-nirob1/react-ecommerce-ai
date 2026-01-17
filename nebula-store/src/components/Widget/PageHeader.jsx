import { Link } from 'react-router-dom';

/**
 * PageHeader Widget
 * 
 * @param {string} title - The main page title
 * @param {Array} breadcrumbs - List of breadcrumb items [{ label, path }]
 */
const PageHeader = ({ title, breadcrumbs }) => {
    return (
        <div className="bg-gray-50 border-b border-gray-100 py-12">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-4">{title}</h1>
                <nav className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                    <Link to="/" className="hover:text-black transition-colors">Home</Link>
                    {breadcrumbs && breadcrumbs.map((item, idx) => (
                        <span key={idx}>
                            <span className="mx-3">•</span>
                            {item.path ? (
                                <Link to={item.path} className="hover:text-black transition-colors">{item.label}</Link>
                            ) : (
                                <span className="text-black">{item.label}</span>
                            )}
                        </span>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default PageHeader;
