interface DurationProps {
    className?: string;
    seconds: number;
}
export const Duration = ({ className, seconds }: DurationProps) => {
    const format = (seconds: number) => {
        const date = new Date(seconds * 1000);
        const hh = date.getUTCHours();
        const mm = date.getUTCMinutes();
        const ss = pad(date.getUTCSeconds());
        if (hh) {
            return `${hh}:${pad(mm)}:${ss}`;
        }
        return `${mm}:${ss}`;
    };

    const pad = (string: number) => {
        return ("0" + string).slice(-2);
    };
    return (
        <time dateTime={`P${Math.round(seconds)}S`} className={className}>
            {format(seconds)}
        </time>
    );
};
