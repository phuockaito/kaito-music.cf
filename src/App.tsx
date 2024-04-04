import clsx from "clsx";

import { ModalComponent } from "modal";
import { UseContextControllers } from "contexts";

import RouterControllers from "page/router-controllers";
import { Header, Menu, MusicControl, WrapperPlaylist, WrapperComment } from "components";
import { Section } from "elements";
import { WrapperVideo } from "layouts";
import { store } from "store";
import { Provider } from "react-redux";
import { UseContextProvider } from "contexts/use-context-provider";

const RootApp = () => {
    const { dropdownMenu } = UseContextControllers();
    return (
        <>
            <Section className="w-full h-full">
                <Header />
                <Menu />
                <Section className={clsx("container-app w-full h-full relative", dropdownMenu ? "pl-72" : "pl-0")}>
                    <Section>
                        <RouterControllers />
                    </Section>
                    <MusicControl />
                </Section>
                <WrapperPlaylist />
                <WrapperComment />
            </Section>
            <ModalComponent />
            <WrapperVideo />
        </>
    );
};

export const App = () => {
    return (
        <Provider store={store}>
            <UseContextProvider>
                <RootApp />
            </UseContextProvider>
        </Provider>
    );
};
