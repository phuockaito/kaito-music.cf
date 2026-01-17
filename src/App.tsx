import clsx from "clsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ModalComponent } from "modal";
import { UseContextControllers } from "contexts";
import { Section } from "layouts";
import { Header, Menu } from "components";
import ZaloAutoLogin from "page/zalo-autologin";
import { WrapperVideo } from "layouts";

export const App = () => {
    const { dropdownMenu } = UseContextControllers();

    // Keep the original app content in a layout component so we can add the autologin route
    const AppLayout = () => (
        <>
            <Section className="w-full h-full">
                <Header />
                <Menu />
            </Section>
            <ModalComponent />
            <WrapperVideo />
        </>
    );

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/zalo-autologin" element={<ZaloAutoLogin />} />
                <Route path="/*" element={<AppLayout />} />
            </Routes>
        </BrowserRouter>
    );
};