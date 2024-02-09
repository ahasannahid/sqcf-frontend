import { Link } from "react-router-dom";

const NavBar = () => {
    // const navOptions = <>
    //     <li><Link to="/">Home</Link></li>
    //     <li><Link to="/art">Art</Link></li>
    //     <li><Link to="/drawing">Drawings</Link></li>
    //     <li><Link to="/writingsbyQC">Writings by QC</Link></li>
    //     <li><Link to="/writingsonQC">Writings on QC</Link></li>
    //     <li><Link to="/biography">Biography</Link></li>
    //     <li><Link to="/taheraChowdhury">Tahera Chowdhury</Link></li>
    //     <li><Link to="/about">About SQCF</Link></li>

    // </>

    return (
        <>

            <div className="navbar sticky top-0 z-10  max-w-screen-xl bg-gray-200 text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-gray-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <a>Art</a>
                                <ul className="p-2 z-[1000]">
                                    <li><Link to="/drawing">Drawings</Link></li>
                                    <li><Link to="/painting">Painting</Link></li>
                                    <li><Link to="/print">Print</Link></li>
                                    <li><Link to="/sketches">Sketches</Link></li>
                                    <li><Link to="/layout-Of-Paintings">Layout of paintings</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a>Graphics Design</a>
                                <ul className="p-2 z-[1000]">
                                    <li><Link to="/book-Cover">Book Cover</Link></li>
                                    <li><Link to="/poster">Poster</Link></li>
                                    <li><Link to="/logo">Logo</Link></li>
                                    <li><Link to="/master-Heads&Page-Make-up">Master Heads & Page Make-up</Link></li>
                                    <li><Link to="/calligraphy&Typography">Calligraphy & Typography</Link></li>
                                    <li><Link to="/portraits">Portraits</Link></li>
                                    <li><Link to="/illustrations&Cards">Illustrations & Cards</Link></li>
                                    <li><Link to="/record-sleeves&Crest-Design">Record sleeves & Crest Design</Link></li>
                                    <li><Link to="/textile-and-Garments">Textile and Garments</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/writingsbyQC">Writings by QC</Link></li>
                            <li><Link to="/writingsonQC">Writings on QC</Link></li>
                            <li><Link to="/taheraChowdhury">Tahera Chowdhury</Link></li>
                            <li><Link to="/biography">Biography</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">SQCF</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <details>
                                <summary>Art</summary>
                                <ul className="p-2 bg-gray-100 z-[1000]">
                                    <li><Link to="/drawing">Drawings</Link></li>
                                    <li><Link to="/painting">Painting</Link></li>
                                    <li><Link to="/print">Print</Link></li>
                                    <li><Link to="/sketches">Sketches</Link></li>
                                    <li><Link to="/layout-Of-Paintings">Layout of paintings</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Graphics Design</summary>
                                <ul className="p-2 bg-gray-100 z-[1000]">
                                    <li><Link to="/book-Cover">Book Cover</Link></li>
                                    <li><Link to="/poster">Poster</Link></li>
                                    <li><Link to="/logo">Logo</Link></li>
                                    <li><Link to="/master-Heads&Page-Make-up">Master Heads & Page Make-up</Link></li>
                                    <li><Link to="/calligraphy&Typography">Calligraphy & Typography</Link></li>
                                    <li><Link to="/portraits">Portraits</Link></li>
                                    <li><Link to="/illustrations&Cards">Illustrations & Cards</Link></li>
                                    <li><Link to="/record-sleeves&Crest-Design">Record sleeves & Crest Design</Link></li>
                                    <li><Link to="/textile-and-Garments">Textile and Garments</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to="/writingsbyQC">Writings by QC</Link></li>
                        <li><Link to="/writingsonQC">Writings on QC</Link></li>
                        <li><Link to="/taheraChowdhury">Tahera Chowdhury</Link></li>
                        <li><Link to="/biography">Biography</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;