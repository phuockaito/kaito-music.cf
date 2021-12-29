import React from "react";

import { useAppDispatch, useAppSelector } from "hooks";
import { modalStore, openModal } from "features";
import { Modal } from "type";

export const UseModal = () => {
    const resultModal: Modal = useAppSelector(modalStore);
    const dispatch = useAppDispatch();
    const toggle = React.useCallback((data: Modal) => dispatch(openModal(data)), [dispatch]);
    return { resultModal, toggle };
};
