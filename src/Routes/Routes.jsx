import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home/Home/Home";
import Biography from "../pages/Biography/Biography/Biography";
import About from "../pages/About/About/About";
// import Drawings from "../pages/Drawings/Drawings/Drawings";
import DrawingsDetails from "../pages/Drawings/Drawings/DrawingsDetails";
import WritingsByQC from "../pages/WritingsByQC/WritingsByQC";
import WritingsOnQc from "../pages/WritingsOnQC/WritingsOnQc";
import Prosepage from "../pages/WritingsByQC/Prosepage"
import JuvenilePage from "../pages/WritingsByQC/JuvenilePage";
import StoryPage from "../pages/WritingsByQC/StoryPage";
import LettersPage from "../pages/WritingsByQC/LettersPage";
import TaheraChowdhury from "../pages/TaheraChowdhury/TaheraChowdhury";
import Art from "../pages/Art/Art/Art";
// import DrawingsSearch from "../components/Search/DrawingsSearch";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/drawing',
        element: <Art></Art>,
        loader: () => fetch(`http://localhost:5000/drawings`)
      },
      {
        path: '/writingsbyQC',
        element: <WritingsByQC></WritingsByQC>
      },
      {
        path: '/writingsbyQC/poems',
        element: <WritingsByQC></WritingsByQC>
      },
      {
        path: '/writingsbyQC/prose',
        element: <Prosepage></Prosepage>
      },
      {
        path: '/writingsbyQC/juvenile',
        element: <JuvenilePage></JuvenilePage>
      },
      {
        path: '/writingsbyQC/story',
        element: <StoryPage></StoryPage>
      },
      {
        path: '/writingsbyQC/letter',
        element: <LettersPage></LettersPage>
      },
      {
        path: '/writingsonQC',
        element: <WritingsOnQc></WritingsOnQc>
      },
      
      {
        path: '/biography',
        element: <Biography></Biography>
      },
      {
        path: '/about',
        element: <About></About>
      },
      // {
      //   path: '/drawingsSearch',
      //   element: <DrawingsSearch></DrawingsSearch>
      // },
      // {
      //   path: '/drawing',
      //   element: <Drawings></Drawings>,
      //   loader: () => fetch(`http://localhost:5000/drawings`)
      // },
      {
        path: '/taheraChowdhury',
        element: <TaheraChowdhury></TaheraChowdhury>,
        loader: () => fetch(`http://localhost:5000/taheraChowdhury`)
      },
      {
        path: '/drawingsDetails/:id',
        element: <DrawingsDetails></DrawingsDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/drawing/${params.id}`)
      },
    ]
  }
])