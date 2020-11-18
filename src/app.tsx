import { useRoutes } from "hookrouter";
import React from "react";
import './app.modules.scss'
import routes from '../routes';
import NotFoundPage from "./components/pages/notFound-page";
import Header from "./components/header/header";


const App = () => {

  const match = useRoutes(routes)
 
  return match ? (
    <>
      <Header/>
      {match}
    </>
  ) : <NotFoundPage/>
};

export default App;
