import * as React from "react";
import { CardMusic } from "elements";
import { useTopViews } from "hooks";

export const TopViewsBillion = () => {
    const { dataBillion, loadingBillion, errorBillion, getTopViewsBillionApi } = useTopViews();
    React.useEffect(() => {
        if (!dataBillion.length) getTopViewsBillionApi({ _type: "billion" });
    }, [errorBillion]);
    return <CardMusic loading={loadingBillion} data={dataBillion} title="Top Tỉ View" />;
};
