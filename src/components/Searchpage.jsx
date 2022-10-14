import { useParams } from "react-router-dom";
import Movieslist from "./Movieslist";
import useFetch from "./useFetch";

const Searchpage = ()=>{
    let{searchVal} = useParams();
    let {data: movie, pending, error,} = useFetch("http://localhost:4000/moviesList");
    return(
        <div>
            <h1> search page{searchVal} </h1>

            {movie &&<Movieslist movies={movie.filter((movie)=>
            {return movie.movieName.toLowerCase().includes(searchVal.toLowerCase())})} title="Search Result"/>}
        </div>
    );
}
export default Searchpage;