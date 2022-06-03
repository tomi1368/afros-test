import { Outlet,Link } from "react-router-dom";
import "./Layout.css"

const Layout = ()=>{
    return(
        <>
        <nav>
            <Link className="link" to={"/exercise5"}>Exercise 5</Link>
            <Link className="link" to={"/exercise6"}>Exercise 6</Link>
            <Link className="link" to={"/exercise7"}>Exercise 7</Link>
            <Link className="link" to={"/exercise8"}>Exercise 8</Link>
        </nav>
        <Outlet/>
        </>
    )   
}

export default Layout