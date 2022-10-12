import { UserNewMusic } from "hooks";
import { WrapperItemList } from "layouts";

export const NewMusic = () => {
    const { data, loading } = UserNewMusic();
    return <WrapperItemList data={data} loading={loading} title="Mới Phát Hành" />;
};
