import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MusicType, PaginationParams } from "type";
import { postCreateFavorite } from "features";
interface MusicState {
    data: MusicType;
    loading: true | false;
    _id_music: string;
    dataRandom: MusicType[];
    index: number;
    playing: true | false;
    audio: any;
    dropdownMusic: true | false;
    pagination?: PaginationParams;
    id_playlist?: string;
    error?: boolean;
}

const initialState: MusicState = {
    data: {} as MusicType,
    loading: false,
    _id_music: "",
    id_playlist: "",
    dataRandom: [],
    index: 0,
    playing: true,
    audio: null,
    dropdownMusic: false,
    pagination: {} as PaginationParams,
    error: false,
};

const musicSlice = createSlice({
    name: "music",
    initialState,
    reducers: {
        addIndexMusic: (state: MusicState, action) => {
            const { data, index, _id } = action.payload;
            state.index = index;
            state.data = data[index];
            state._id_music = _id;
            state.dataRandom = data;
        },
        onNextPrevMusic: (state: MusicState, action: PayloadAction<number>) => {
            const index = action.payload;
            if (index >= 0) {
                if (state.dataRandom[index]) {
                    state.data = state.dataRandom[index];
                    state.index = index;
                    state._id_music = state.dataRandom[index]._id;
                }
            }
        },
        onRandomMusic: (state: MusicState) => {
            const random = Math.floor(Math.random() * state.dataRandom.length);
            state.data = state.dataRandom[random];
            state._id_music = state.dataRandom[random]._id;
        },
        onPauseMusic: (state: MusicState, action: PayloadAction<boolean>) => {
            state.playing = action.payload;
        },
        onAudio: (state: MusicState, action: any) => {
            state.audio = action.payload;
        },
        onDropdownMusic: (state: MusicState, action: PayloadAction<boolean>) => {
            state.dropdownMusic = action.payload;
        },
        onChooseMusic: (state: MusicState, action: PayloadAction<MusicType>) => {
            state.data = action.payload;
            state._id_music = action.payload._id;
        },
        onPlaylist: (state: MusicState, action) => {
            const { data, index, _id, music } = action.payload;
            const template: MusicType[] = [];
            data.forEach((element: any) => {
                if (element.music) template.push(element.music);
                else template.push(element);
            });
            if (music.music) {
                state.data = music.music;
                state._id_music = music.id_music;
            } else {
                state.data = music;
                state._id_music = _id;
            }
            state.dataRandom = template;
            state.index = index;
        },
        addIdPlaylist: (state: MusicState, action: PayloadAction<string>) => {
            state.id_playlist = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(postCreateFavorite.fulfilled, (state, action: any) => {
            const new_favorite = action.payload.account_favorite;
            const dataOld = state.data;
            state.data = { ...dataOld, account_favorite: new_favorite };
        });
    },
});
const { actions, reducer } = musicSlice;
export const {
    addIndexMusic,
    onNextPrevMusic,
    onRandomMusic,
    onPauseMusic,
    onAudio,
    onDropdownMusic,
    onChooseMusic,
    onPlaylist,
    addIdPlaylist,
} = actions;
export default reducer;
