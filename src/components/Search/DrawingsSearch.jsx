import { Link } from "react-router-dom";

const DrawingsSearch = ({result}) => {
    console.log(result);
      const { imageLink, _id, titleinBangla } = result;
    return (
        <div className="image">
            <Link to={`/drawingsDetails/${_id}`}>
                <figure><img className="w-[350px] h-[350px] " src={imageLink} alt="Shoes" /></figure>
            </Link>
            <div className="img-content">
                {/* <h3 className="text-3xl mb-2 font-bold text-white">{titleinEnglish}</h3> */}
                <h3 className="text-3xl mb-2 font-bold text-white">{titleinBangla}</h3>
                <Link to={`/drawingsDetails/${_id}`}>
                {/* <button className="btn btn-lg bg-gray text-white">View Details</button> */}
                <button className="btn btn-lg bg-gray text-white">বিস্তারিত</button>
                </Link>
            </div>
        </div>
    );
};

export default DrawingsSearch;