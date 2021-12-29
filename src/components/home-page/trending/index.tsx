import { UesTrending } from "hooks";
import { CardMusic } from "elements";

export const Trending = () => {
    const { resultTrending } = UesTrending();
    const { data, loading } = resultTrending;
    return <CardMusic loading={loading} data={data} title="Thịnh hành" />;
};
