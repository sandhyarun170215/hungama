import { useState } from "react";
import { Link } from "react-router-dom";


const Movieslist = ( {movies , title } ) => {


    
    return ( 
        <div>
            <h1>{title}</h1>
            {
            movies.map((movie)=>
                {
                    return(
                        <Link to ={`moviedetails${movie.id}`}>
                            <div key={movie.id} className="movie">
                            
                            <h1>Movie Name : {movie.movieName}</h1>
                            <h2>Hero : {movie.hero}</h2>
                            <h2>Gener : {movie.genere}</h2>
                            <h2>Director: {movie.director}</h2>
                            <h2>Ratings: {movie.ratings}</h2>

                        </div>
                        
                        </Link>
                        
                    )
                })
            }
        </div>
     );
}
 
export default Movieslist;