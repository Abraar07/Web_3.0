import { Navbar,Welcome,Loader,Services,Transactions,Footer } from "./components"
import { Container} from "@material-ui/core";
import { BrowserRouter, Routes, Route,useRoutes } from 'react-router-dom';
import Auth from "./components/Auth";
import React from "react";
import Home from "./Home/Home";
import './index.css'
//import DesignAuth from "./components/DesignAuth";
const App = () => {
  
  /* let routes = useRoutes([
    {path:"/auth" ,element:<Auth />}
  ])
   */
  

  return (
    <BrowserRouter > 
    
          
    
          <Routes>
              <Route  path="/"  element={<Home />}/>
              <Route   path="/Auth"  element={<Auth />}/>
            </Routes>
    
    </BrowserRouter> 
        
  )
}

export default App
