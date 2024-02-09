import { Link } from "react-router-dom";

const WritingsByQCAside = () => {
    return (
        <div className="my-3 ms-4">
            <h1><Link to="/writingsbyQC/poems" className="text-xl font-bold">Poems</Link></h1>
            <h1 className="my-3"><Link to="/writingsbyQC/prose" className="text-xl font-bold">Prose</Link></h1>
            <h1><Link to="/writingsbyQC/juvenile" className="text-xl font-bold">Juvenile Literature</Link></h1>
            <h1 className="my-3"><Link to="/writingsbyQC/story" className="text-xl font-bold">Story</Link></h1>
            <h1> <Link to="/writingsbyQC/letter" className="text-xl font-bold">Letters</Link></h1>
        </div>
    );
};

export default WritingsByQCAside;



  
 