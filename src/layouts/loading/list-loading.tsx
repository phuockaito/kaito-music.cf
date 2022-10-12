import "./style.css";
interface ListLoadingProps {
    items?: number;
    className?: string;
}
export const ListLoading = ({
    items = 20,
    className = "grid gap-x-2 gap-y-1 grid-template-columns",
}: ListLoadingProps) => {
    return (
        <div className={className}>
            {[...Array(items)].map((_, i) => (
                <div className="flex h-16 space-x-4 loading__card" key={i}>
                    <div className="h-12 header">
                        <div className="w-12 h-12 img" />
                    </div>
                    <div className="w-full">
                        <div className="my-2 line" />
                        <div className="my-2 line" />
                    </div>
                </div>
            ))}
        </div>
    );
};
