import { useLoaderData } from "react-router-dom";
import SinglePicture from "./SinglePicture";


const TaheraChowdhury = () => {
    const taheraChowdhuryPictures = useLoaderData();
    return (
        <div>
        <h1 className="text-4xl text-center my-5 ">DRAWINGS</h1>
        <div className="">
            {
                taheraChowdhuryPictures.map(picture => <SinglePicture
                    key={picture._id}
                    picture={picture}
                ></SinglePicture>)
            }
        </div>
    </div>
    );
};

export default TaheraChowdhury;