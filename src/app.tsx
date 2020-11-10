import { useRoutes } from "hookrouter";
import React from "react";
import './app.modules.scss'
import routes from '../routes';
import NotFoundPage from "./components/pages/notFound-page";


const App = () => {
  const match = useRoutes(routes)
 
  return match || <NotFoundPage/>
};

export default App;
