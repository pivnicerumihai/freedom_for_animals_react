import React  from "react";
import useScrollPosition from "../../CustomHooks/useScrollPosition";
import { useHistory, useLocation } from "react-router-dom";
 
const Navbar = () => {
    
    const scrollPosition = useScrollPosition();
    const history = useHistory();
    let location = useLocation();
    console.log("LOCATION", location.pathname)
    let position;

    if(scrollPosition < 10){
        position = "top";
    }
    else{
        position = "scrolling";
    }

    return (
        <nav className="navbar">
       
            <p className="name">Freedom for Animals</p>

             <div className={"navbar-buttons " + position}>
                 <button 
                 className={location.pathname === "/" ? "active": null}
                  onClick={()=>history.push("/")}>Home</button>
                 <button >Videos</button>
                 <button 
                 className={location.pathname === "/shop" ? "active": null}
                 onClick={()=>history.push("/shop")}
                 >Shop</button>
                 <button>Donate</button>
                <button>About us</button>
              
               
             </div>
             {/*  */}
             </nav>
    )
}

export default Navbar;