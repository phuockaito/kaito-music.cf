import "./style.css";
interface CardLoadingProps {
    items?: number;
    className?: string;
}

export const CardLoading = ({ items = 5, className = "wrapper__loading" }: CardLoadingProps) => {
    return (
        <div className={className}>
            {[...Array(items)].map((_, i) => (
                <div className="loading__card" key={i}>
                    <div className="h-32 header">
                        <div className="img" />
                    </div>
                    <div className="description">
                        <div className="my-2 line" />
                        <div className="my-2 line" />
                        <div className="my-2 line" />
                        <div className="my-2 line" />
                    </div>
                </div>
            ))}
        </div>
    );
};
