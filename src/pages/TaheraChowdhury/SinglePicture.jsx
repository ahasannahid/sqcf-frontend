import { Link } from "react-router-dom";

const SinglePicture = ({picture}) => {
    const {imageLink, titleinBangla } = picture;
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img className="w-[350px] h-[350px] " src={imageLink} />
                    <div className="ms-5 text-2xl">
                        <p className="py-1 font-bold">{titleinBangla}</p>
                        <Link to={`/drawingsDetails/`}>
                            <button className="btn btn-wide bg-primary text-white">View Details</button>
                        </Link>
                        <hr className="text-primary" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePicture;