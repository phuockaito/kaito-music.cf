import searchReducer from "features/search/search-slice";
import musicReducer from "features/music/music-slice";
import trendingReducer from "features/trending/trending-slice";
import favoriteHomeReducer from "features/favorite-home/favorite-home-slice";
import newMusicReducer from "features/new-music/new-music-slice";
import accountReducer from "features/account/account-slice";
import modalReducer from "features/modal/modal-slice";
import playlistReducer from "features/playlist/playlist-slice";
import playHistoryReducer from "features/play-history/play-history-slice";
import favoriteAccountReducer from "features/favorite-account/favorite-account-slice";
import uploadMusicReducer from "features/upload-music/upload-music-slice";
import commentReducer from "features/comment/comment-slice";

const reducer = {
    search: searchReducer,
    music: musicReducer,
    trending: trendingReducer,
    favoriteHome: favoriteHomeReducer,
    newMusic: newMusicReducer,
    account: accountReducer,
    modal: modalReducer,
    playlist: playlistReducer,
    playHistory: playHistoryReducer,
    favoriteAccount: favoriteAccountReducer,
    uploadMusic: uploadMusicReducer,
    comment: commentReducer,
};
export default reducer;
