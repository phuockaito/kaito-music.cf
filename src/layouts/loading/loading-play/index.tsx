import "./style.css";

interface LoadingPlayProps {
    className?: string;
    onClick?: (e: any) => void;
    style?: React.CSSProperties;
}

export const LoadingPlay = ({ className, onClick, style }: LoadingPlayProps) => {
    return (
        <div id="cssload-loader" className={className} style={style} onClick={onClick}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};
