import "./style.css";
interface CardLoadingProps {
    items?: number;
    className?: string;
}

export const CardLoading = ({ items = 6, className = "wrapper__loading" }: CardLoadingProps) => {
    return (
        <div className={className}>
            {[...Array(items)].map((_, i) => (
                <div className="loading__card" key={i}>
                    <div className="header h-32">
                        <div className="img" />
                    </div>
                    <div className="description">
                        <div className="line my-2" />
                        <div className="line my-2" />
                        <div className="line my-2" />
                        <div className="line my-2" />
                    </div>
                </div>
            ))}
        </div>
    );
};
