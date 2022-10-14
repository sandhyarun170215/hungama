import {Link} from 'react-router-dom';
import { useState } from 'react';
const Navbar = () =>{

    let[searchVal,setSearchVal] = useState("");
    return(
        
        <nav>
            <h1>Hungaama</h1>
            <div className="search">
            <input type="search" value={searchVal} onChange={(e)=>{setSearchVal(e.target.value);}}/>
            <Link to = {`/search${searchVal}`}>
            <button>Search</button>
            </Link>
            
            </div>
            <div>
                <Link to ="/">Home</Link>
                <Link to ="/add">Add New Movie</Link>
             </div>
        </nav>
    );
}
export default Navbar;
