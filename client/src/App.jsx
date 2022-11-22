import { Navbar,Welcome,Loader,Services,Transactions,Footer } from "./components"
import { Container} from "@material-ui/core";
import { BrowserRouter, Routes, Route,useRoutes } from 'react-router-dom';
import Auth from "./components/Auth";
import React from "react";
import Home from "./Home/Home";
import './index.css'
import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
//import DesignAuth from "./components/DesignAuth";
const App = () => {
  
  /* let routes = useRoutes([
    {path:"/auth" ,element:<Auth />}
  ])
   */
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <BrowserRouter > 
    
          
    
          <Routes>
              <Route  path="/"  element={<Home currentId={currentId} setCurrentId={setCurrentId}/>}/>
              
              <Route   path="/Auth"  element={<Auth currentId={currentId} setCurrentId={setCurrentId}/>}/>
              
            </Routes>
    
    
    </BrowserRouter> 
        
  )
}

export default App
