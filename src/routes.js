import React,{Component} from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Menu from "./component/pages/Menu";
import Orderstatus from "./component/pages/Orderstatus";

class Router extends Component{
    render(){
        return(
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/orderstatus' element={<Orderstatus/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>

            </Routes>

        )
    }
}
export default Router;
