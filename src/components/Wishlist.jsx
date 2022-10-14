import { useEffect } from "react";
import Movieslist from "./Movieslist";

const Wishlist = () => {

    useEffect(()=>{
        let wish = localStorage.getItem("Wishlist")
    })
    return (
        <div>
            <h1>fav movies</h1>

        </div>
      );
}
 
export default Wishlist;