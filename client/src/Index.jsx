//import { Navbar,Welcome,Loader,Services,Transactions,Footer } from "./components"
//import { Container} from "@material-ui/core";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from "./components/Auth";
import React from "react";

const Index = () => {
    return(
        <div>
            <BrowserRouter >
            <Routes>
              <Route   path="/Auth"  element={<Auth />}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Index