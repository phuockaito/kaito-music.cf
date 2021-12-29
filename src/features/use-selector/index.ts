import { RootState } from "store";

export const searchStore = (state: RootState) => state.search;
export const musicStore = (state: RootState) => state.music;
export const trendingStore = (state: RootState) => state.trending;
export const favoriteHomeStore = (state: RootState) => state.favoriteHome;
export const newMusicStore = (state: RootState) => state.newMusic;
export const accountStore = (state: RootState) => state.account;
export const modalStore = (state: RootState) => state.modal;
export const playlistStore = (state: RootState) => state.playlist;
export const playHistoryStore = (state: RootState) => state.playHistory;
export const favoriteAccountStore = (state: RootState) => state.favoriteAccount;
export const uploadMusicStore = (state: RootState) => state.uploadMusic;
export const commentStore = (state: RootState) => state.comment;
