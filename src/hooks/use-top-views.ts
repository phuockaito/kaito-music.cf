import { useAppDispatch, useAppSelector } from "hooks";
import { ParamsUrl } from "type";
import { TopViewsStore, getTopViewsMillion, getTopViewsBillion } from "features";
export const useTopViews = () => {
    const resultNewMusic = useAppSelector(TopViewsStore);
    const { dataMillion, loadingMillion, errorMillion, dataBillion, loadingBillion, errorBillion } = resultNewMusic;
    // api dispatch
    const dispatch = useAppDispatch();
    const getTopViewsMillionApi = (params: ParamsUrl) => dispatch(getTopViewsMillion(params));
    const getTopViewsBillionApi = (params: ParamsUrl) => dispatch(getTopViewsBillion(params));

    return {
        getTopViewsMillionApi,
        getTopViewsBillionApi,
        dataMillion,
        loadingMillion,
        dataBillion,
        loadingBillion,
        errorMillion,
        errorBillion,
    };
};
