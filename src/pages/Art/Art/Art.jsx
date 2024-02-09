import { useLoaderData } from "react-router-dom";
import SingleArt from "./SingleArt";
import Search from "../../../components/Search/Search";

const Art = () => {
    const arts = useLoaderData();
    return (
        <div>
            <Search></Search>
            <h1 className="text-4xl text-center my-5 ">ARTS</h1>
            <div className="grid grid-cols-4  gap-4 mx-0 px-0 mb-5">
                {
                    arts.map(art => <SingleArt
                        key={art._id}
                        art={art}
                    ></SingleArt>)
                }
            </div>
        </div>
    );
};

export default Art;