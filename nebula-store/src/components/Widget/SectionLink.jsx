import { Link } from 'react-router-dom';

/**
 * SectionLink Widget
 * 
 * @param {string} text - Link label
 * @param {string} path - URL path
 * @param {string} className - Optional extra classes
 */
const SectionLink = ({ text, path, className = "" }) => {
    return (
        <Link
            to={path}
            className={`text-sm font-bold border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all uppercase tracking-wider w-fit ${className}`}
        >
            {text}
        </Link>
    );
};

export default SectionLink;
