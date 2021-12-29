import { Account, CustomAccount } from "type";

export const initialStateAccount: CustomAccount = {
    data: {} as Account,
    loading: false,
    loadingGoogle: false,
    accessToken: "",
    error: false,
};
