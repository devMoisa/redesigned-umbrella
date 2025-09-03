const Container = ({ children, className = '' }) => <div className={`w-full max-w-[1000px] mx-auto px-4 ${className}`}>{children}</div>;

export default Container;
