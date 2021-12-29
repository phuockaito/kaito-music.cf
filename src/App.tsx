import clsx from "clsx";
import { BrowserRouter as Router } from "react-router-dom";

import { ModalComponent } from "modal";
import { UseContextControllers } from "contexts";

import RouterControllers from "page/router-controllers";
import { Header, Menu, MusicControl, WrapperPlaylist, WrapperComment } from "components";
import { Section } from "elements";
import { WrapperVideo } from "layouts";

export const App = () => {
    const { dropdownMenu } = UseContextControllers();
    return (
        <Router>
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
        </Router>
    );
};
