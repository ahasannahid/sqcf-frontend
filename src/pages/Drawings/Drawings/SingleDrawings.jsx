import { Link } from "react-router-dom";

const SingleDrawings = ({ drawing }) => {
    const {_id, imageLink, titleinBangla, titleinEnglish } = drawing;
    // console.log("photo Link:", imageLink);
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img className="w-[350px] h-[350px] " src={imageLink} />
                    <div className="ms-5 text-2xl">
                        <p className="py-1 font-bold">{titleinBangla}</p>
                        <p className="py-1">{titleinEnglish.slice(0, 20)}</p>
                        <Link to={`/drawingsDetails/${_id}`}>
                            <button className="btn btn-wide bg-primary text-white">View Details</button>
                        </Link>
                        <hr className="text-primary" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDrawings;