import { Fragment } from "react";
import clsx from "clsx";

import { Menu, Transition } from "@headlessui/react";
interface DropdownProps {
    className?: string;
    title: React.ReactNode;
    titleClassName?: string;
    childrenClassName?: string;
    style?: React.CSSProperties;
}
export const Dropdown = ({
    className,
    titleClassName,
    title,
    children,
    childrenClassName = "right-0",
    style,
}: React.PropsWithChildren<DropdownProps>) => {
    return (
        <Menu as="div" className={className}>
            <Menu.Button className={titleClassName}>{title}</Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items style={style} className={clsx("absolute", childrenClassName)}>
                    {children}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
