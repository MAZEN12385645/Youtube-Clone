import logo from "./logo.png"
import avatar from "./avatar.png"
import search from "./search.png"
import { useState } from "react"

function Navbar (){
    const [active , setActive] = useState(false)

    return(
        <div className="navbar">
            <img width={30} src={logo} alt="" />

            {/* هنا اضفت كلاس search-input + شرط active */}
            <input 
              className={`search-input ${active ? "active" : ""}`}  
              type="search"
              placeholder="Search..."
            />

            <img  
              onClick={() => setActive(!active)}  
              className="search" 
              width={30} 
              src={search} 
              alt="search" 
            />
            
            <img width={30} src={avatar} alt="avatar" />
        </div>
    )
}
export default Navbar
