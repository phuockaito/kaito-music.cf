import "./style.css";
interface ListLoadingProps {
    items?: number;
    className?: string;
}
export const ListLoading = ({
    items = 21,
    className = "grid grid-cols-1 gap-y-1 gap-x-2 md:grid-cols-2 xl:grid-cols-3",
}: ListLoadingProps) => {
    return (
        <div className={className}>
            {[...Array(items)].map((_, i) => (
                <div className="flex space-x-4 h-16 loading__card" key={i}>
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
