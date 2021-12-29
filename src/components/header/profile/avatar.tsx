import { Heading5, Heading3 } from "elements";
import { Image, Dropdown } from "layouts";

import { Account } from "type";
interface AccountProps {
    onClick: () => void;
}

type customProps = AccountProps & Account;

export const Avatar = ({ user_name, email, image, onClick }: customProps) => {
    return (
        <Dropdown
            style={{ maxWidth: "300px", width: "100%" }}
            childrenClassName="right-4"
            className="group-profile_avatar w-10 h-10"
            title={<Image className="group-profile_image w-10 h-10 rounded cursor-pointer" src={image} />}
        >
            <div className="grid place-items-center gap-1 relative bg-[#3e3f44] right-0 top-full w-full p-6 rounded">
                <Image className="group-profile_image w-12 h-12 rounded-full inline-block" src={image} />
                <Heading3 title={user_name} className="text-[#ffff]" />
                <Heading5 title={email} className="text-[#a5a6c4]" />
                <div className="cursor-pointer" onClick={onClick}>
                    <Heading5 title="Đăng xuất" className="text-[#a5a6c4]" />
                </div>
            </div>
        </Dropdown>
    );
};
