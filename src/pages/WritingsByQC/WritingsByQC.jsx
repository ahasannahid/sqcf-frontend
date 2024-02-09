import Poems from "../../components/Writings/Poems";
import WritingsByQCAside from "../../components/Writings/WritingsByQCAside";

const WritingsByQC = () => {
    return (
        <div className="h-[75vh]">
            <div className="flex flex-col md:flex-row ">
                <div className="w-full md:w-1/4 mt-5">
                    <WritingsByQCAside></WritingsByQCAside>
                </div>
                <div className="w-full md:w-3/4">
                    <Poems></Poems>
                </div>
            </div>
        </div>
    );
};

export default WritingsByQC;