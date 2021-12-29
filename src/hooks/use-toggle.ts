import React from "react";

export const useToggle = () => {
    const [open, setOpen] = React.useState<boolean>(false);

    const handleWindowSizeChange = () => window.screen.width >= 700 && setOpen(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        return () => window.removeEventListener("resize", handleWindowSizeChange);
    }, [open]);

    return {
        setOpen,
        open,
    };
};
