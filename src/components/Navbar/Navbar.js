import React  from "react";
import useScrollPosition from "../../CustomHooks/useScrollPosition";

 
const Navbar = () => {
    
    const scrollPosition = useScrollPosition();
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
                 <button >Home</button>
                 <button >Videos</button>
                 <button>Get Involved</button>
                <button>About us</button>
              
               
             </div>
             {/*  */}
             </nav>
    )
}

export default Navbar;