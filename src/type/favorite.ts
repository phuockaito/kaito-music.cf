import { StateResponse, ArrayMusicType, isBoolean } from "type";

export type FavoriteType = StateResponse<ArrayMusicType> & isBoolean;
