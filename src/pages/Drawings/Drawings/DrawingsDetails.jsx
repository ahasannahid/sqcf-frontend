import { useLoaderData } from "react-router-dom";

const DrawingsDetails = () => {
    const drawing = useLoaderData();

    const { imageLink, yearinEnglish, yearinBangla, titleinEnglish, titleinBangla, measurementinEnglish, measurementinBangla, mediainEnglish, mediainBangla } = drawing;

    return (
        <div className="text-black">
            {/* <h1 className="my-5 text-4xl text-center text-black">{titleinBangla}</h1> */}
            <img className="w-[800px] mx-auto font-bold mt-5" src={imageLink} alt="" />
            <div className="flex text-lg mt-4 mb-4 ms-2 items-center justify-center">
                <h1>{titleinBangla}</h1>
                <h1 className="mx-3">{mediainBangla}</h1>
                <h1 className="me-3">{measurementinBangla}</h1>
                <h1>{yearinBangla}</h1>
            </div>

            {/* <div className="flex text-lg mb-4 ms-2 items-center justify-center">
                <h1>{titleinEnglish}</h1>
                <h1 className="mx-3">{mediainEnglish}</h1>
                <h1 className="me-3">{measurementinEnglish}</h1>
                <h1>{yearinEnglish}</h1>
            </div> */}
            {/* <div>
                <h1>{tagsinEnglish}</h1>
                <h1>{tagsinBangla}</h1>
            </div> */}
        </div>
    );
};

export default DrawingsDetails;