import "./style.css";
interface ListLoadingProps {
    items?: number;
    className?: string;
}
export const ListLoading = ({
    items = 16,
    className = "grid gap-x-2 gap-y-1 grid-template-columns",
}: ListLoadingProps) => {
    return (
        <div className={className}>
            {[...Array(items)].map((_, i) => (
                <div className="loading__card flex h-16 space-x-4" key={i}>
                    <div className="header h-12">
                        <div className="img w-12 h-12" />
                    </div>
                    <div className="w-full">
                        <div className="line my-2" />
                        <div className="line my-2" />
                    </div>
                </div>
            ))}
        </div>
    );
};
