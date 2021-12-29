import { ModalTypeEnum } from "const";
import { Modal } from "type";
export const initialStateModal: Modal = {
    type: ModalTypeEnum,
    open: false,
    title: "",
    others: {},
};
