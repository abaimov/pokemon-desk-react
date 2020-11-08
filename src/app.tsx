import React from "react";
import Homepage from "./components/pages/homepage";
import{BrowserRouter,Route} from 'react-router-dom'
import './app.modules.scss'


const App = () => {
 
  return (   <BrowserRouter>
                <Route path="/home" component={Homepage}/>
                <Route path="/about" render={()=> "test"}/>
              </BrowserRouter>)
};

export default App;
