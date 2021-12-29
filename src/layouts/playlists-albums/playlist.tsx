import { UsePlaylist, UseAccount, UseMusic } from "hooks";

import { PlaylistType } from "type";
import { NeedLogin, WrapperScroll, CircleLoading } from "layouts";
import { Heading5, MenuItem } from "elements";

import { MdQueueMusic } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

interface PlaylistProps {
    _id_music?: string;
    className?: string;
    isEditDelete?: boolean;
}

export const Playlist = ({ _id_music, className = "h-full", isEditDelete }: PlaylistProps) => {
    const { resultPlayList, getByIdPlaylistAPI, handleAddListMusic } = UsePlaylist();
    const { accessToken } = UseAccount();
    const { handleAddIdPlaylist } = UseMusic();
    const { data, loading } = resultPlayList;

    const onClick = (idPlaylist: string, nameList: string) => {
        if (_id_music) {
            handleAddListMusic({ _id: idPlaylist, _id_music, nameList });
            handleAddIdPlaylist(idPlaylist);
        } else {
            getByIdPlaylistAPI({ _id: idPlaylist, nameList });
            handleAddIdPlaylist(idPlaylist);
        }
    };

    return !accessToken ? (
        <div className="p-4 rounded-lg bg-[#01aaed] text-center mt-4">
            <NeedLogin
                isContent
                login
                className="p-2"
                icon={<FcGoogle size="1.3em" />}
                title="Đăng nhập"
                titleClassName="text-white text-center"
            />
        </div>
    ) : loading ? (
        <CircleLoading className="w-16 h-16" />
    ) : data.length ? (
        <WrapperScroll className={className}>
            {data.map((item: PlaylistType) => (
                <MenuItem
                    key={item._id}
                    _id={item._id}
                    isEditDelete={isEditDelete}
                    icon={<MdQueueMusic className="group-hover:text-[#ff3465] text-[#a5a6c4]" size="1.8em" />}
                    onClick={() => onClick(item._id, item.name_list)}
                    title={item.name_list}
                    className="group py-2"
                />
            ))}
        </WrapperScroll>
    ) : (
        <Heading5 title="Danh sách trống" className="text-[#a5a6c4] mt-4" />
    );
};
