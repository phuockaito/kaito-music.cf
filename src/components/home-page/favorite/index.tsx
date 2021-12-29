import { UesFavorite } from "hooks";
import { CardMusic } from "elements";

export const Favorite = () => {
    const { resultFavorite } = UesFavorite();
    const { data, loading } = resultFavorite;
    return <CardMusic loading={loading} data={data} title="Yêu thích" />;
};
