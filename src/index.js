import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
// import ChooseFolder from "./pages/ChooseFolder";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Folders from "./pages/Folders";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/label",
    element: <Folders/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);
