import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='home'>
      <div className='max-w-screen-xl mx-auto h-[100%] '>
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>,
)
