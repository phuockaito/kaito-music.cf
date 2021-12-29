import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateModal } from "state";
import { Modal } from "type";
const modalSlice = createSlice({
    name: "modal",
    initialState: initialStateModal,
    reducers: {
        openModal: (state: Modal, action: PayloadAction<Modal>) => {
            const { type, title, others, _id } = action.payload;
            state.open = true;
            state.type = type;
            state.title = title;
            state.others = others;
            state._id = _id;
        },
    },
});
const { actions, reducer } = modalSlice;
export const { openModal } = actions;
export default reducer;
