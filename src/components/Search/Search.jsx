import { useState } from "react";
import { Link } from 'react-router-dom';
// import DrawingsSearch from "./DrawingsSearch";
// import './searchh'

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:5000/search?tags=${searchTerm}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" px-2 py-5 rounded  w-full">
      <div className=" flex items-center justify-around">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded w-full mb-4 py-3 bg-gray-50"
        />

        <button
          onClick={handleSearch}
          className="bg-gray-200 text-black py-3 px-4 rounded mt-[-20px] ml-2 hover:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p className="text-red-500 my-4">{error}</p>}

      <div className="mt-4 grid grid-cols-4  gap-4 mx-0 px-0 mb-5">
        {results.map((result) => (
          <div key={result._id} className="mb-2 image">
            {/* <div>{result.titleinEnglish}</div> */}


            <Link to={`/drawingsDetails/${result._id}`}>
                <figure><img className="w-[350px] h-[250px] " src={result.imageLink} alt="Shoes" /></figure>
            </Link>
            <div className="img-content">
                {/* <h3 className="text-3xl mb-2 font-bold text-white">{titleinEnglish}</h3> */}
                <h3 className="text-3xl mb-2 font-bold text-white">{result.titleinBangla}</h3>
                <Link to={`/drawingsDetails/${result._id}`}>
                {/* <button className="btn btn-lg bg-gray text-white">View Details</button> */}
                <button className="btn btn-lg bg-gray text-white">বিস্তারিত</button>
                </Link>
            </div>



          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
