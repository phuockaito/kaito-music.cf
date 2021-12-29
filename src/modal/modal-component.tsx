import React from "react";
import { Modal } from "antd";

import { UseModal, UseAccount } from "hooks";

import { ModalAddListMusic, ModalLogin, ModalRegister, ModalEditPlayList, ModalUploadMusic } from "modal";
import { Heading3 } from "elements";

import { ModalTypeEnum } from "const";
import "./style.css";

const checkModal = (modalType: ModalTypeEnum) => {
    switch (modalType) {
        case ModalTypeEnum.ADD_LIST_MUSIC:
            return ModalAddListMusic;
        case ModalTypeEnum.LOGIN:
            return ModalLogin;
        case ModalTypeEnum.REGISTER:
            return ModalRegister;
        case ModalTypeEnum.EDIT_PLAYLIST:
            return ModalEditPlayList;
        case ModalTypeEnum.UPLOAD_MUSIC:
        case ModalTypeEnum.EDIT_UPLOAD_MUSIC:
            return ModalUploadMusic;
        default:
            return null;
    }
};

export const ModalComponent = () => {
    const { accessToken } = UseAccount();
    const { resultModal, toggle } = UseModal();
    const { type, open, title } = resultModal;

    const WrapperModal: any = React.useMemo(() => checkModal(type), [type]);

    React.useEffect(() => {
        toggle({ type: ModalTypeEnum.NULL, title: "" });
    }, [accessToken]);

    if (!WrapperModal) return null;

    return (
        <Modal
            visible={open}
            centered
            title={title && <Heading3 title={title} className="text-white" />}
            onOk={toggle}
            onCancel={toggle}
            footer={null}
            className="group__modal overflow-hidden"
        >
            <WrapperModal {...resultModal} />
        </Modal>
    );
};
