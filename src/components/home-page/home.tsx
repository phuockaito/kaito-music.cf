import { WrapperBanner } from "./banner";
import { Trending } from "./trending";
import { Favorite } from "./favorite";
import { NewMusic } from "elements";

const Home = () => {
    return (
        <div className="w-full h-full">
            <div className="m-auto overflow-hidden">
                <WrapperBanner />
                <Trending />
                <NewMusic />
                <Favorite />
            </div>
        </div>
    );
};
export default Home;
