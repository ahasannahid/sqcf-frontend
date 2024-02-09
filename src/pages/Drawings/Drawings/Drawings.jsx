// import { useQuery } from "react-query";
import { useLoaderData } from "react-router-dom";
import SingleDrawings from "./SingleDrawings";

const Drawings = () => {
   
    const drawings = useLoaderData();
    // console.log(drawings);
   
    return (
        <div>
            <h1 className="text-4xl text-center my-5 ">DRAWINGS</h1>
            <div className="">
                {
                    drawings.map(drawing => <SingleDrawings
                        key={drawing._id}
                        drawing={drawing}
                    ></SingleDrawings>)
                }
            </div>
        </div>
    );
};

export default Drawings;