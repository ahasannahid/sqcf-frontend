import WritingsByQCAside from "../../components/Writings/WritingsByQCAside";


const JuvenilePage = () => {
    return (
        <div className="h-[75vh]">
            <div className="flex flex-col md:flex-row ">
                <div className="w-full md:w-1/4 mt-5">
                    <WritingsByQCAside></WritingsByQCAside>
                </div>
                <div className="w-full md:w-3/4 mb-9">
                    <h1>Juvenile Writings Update Soon</h1>
                </div>
            </div>
        </div>
    );
};

export default JuvenilePage;