import React from "react";

import { UsePlaylist } from "hooks";
import { Playlist } from "./playlist";

export const PlaylistsAlbums = () => {
    const { getPlaylistAPI } = UsePlaylist();

    React.useEffect(() => {
        getPlaylistAPI({});
    }, [getPlaylistAPI]);
    return <Playlist className="mt-4 max-h-64" isEditDelete />;
};
