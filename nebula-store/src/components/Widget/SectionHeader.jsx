import SectionLink from './SectionLink';

/**
 * SectionHeader Widget
 * 
 * @param {string} title - Main title of the section
 * @param {string} subtitle - Small text above the title
 * @param {string} linkText - Text for the "View All" link
 * @param {string} linkPath - URL for the link
 */
const SectionHeader = ({ title, subtitle, linkText, linkPath }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
            <div className="space-y-2">
                {subtitle && (
                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                        {subtitle}
                    </span>
                )}
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-none">
                    {title}
                </h2>
            </div>
            {linkText && linkPath && (
                <SectionLink text={linkText} path={linkPath} />
            )}
        </div>
    );
};

export default SectionHeader;
