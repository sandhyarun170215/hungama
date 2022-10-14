import { useEffect } from "react";
import { useState } from "react";
import { useHistory} from "react-router-dom";
import useFetch from "./useFetch";

const Updatemovie = ({previousMovie})=>{

    const [hero,setHero] = useState(previousMovie.hero);
    const [movieName,setmovieName] = useState(previousMovie.movieName);
    const [director,setdirector] = useState(previousMovie.director);
    const [genere,setgenere] = useState(previousMovie.genere);
    const [ratings,setratings] = useState(previousMovie.ratings);

    let history = useHistory();
    
    let handleSubmit = (e)=>{
        
        e.preventDefault();
        
        let updatedMovie = {movieName , hero , director , genere , ratings};
        
        fetch(`http://localhost:4000/moviesList/${previousMovie.id}`, 
        {method:"PUT", 
        headers:{"Accept": "application/json","Content-Type":"application/json"},
        body:JSON.stringify(updatedMovie)})

        .then(()=>{history.push("/")});

    }
    
    return(
        <div className="add-movie">
            <h1>Update movie</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div>
                    
                <label>MovieName: </label> 
                <input type="text" value={movieName} onChange={(e)=>{setmovieName(e.target.value);}}/>
                <label>Hero: </label> 
                <input type="text" value={hero} onChange={(e)=>{setHero(e.target.value);}}/>
                <label>Director: </label> 
                <input type="text" value={director} onChange={(e)=>{setdirector(e.target.value);}}/>
                <label>Genere: </label> 
                <input type="text" value={genere} onChange={(e)=>{setgenere(e.target.value);}}/>
                <label>Ratings: </label> 
                <input type="text" value={ratings} onChange={(e)=>{setratings(e.target.value);}}/>
                </div>
                <input type="submit" value="Update movie"/>
            </form>
        </div>
        );
}
export default Updatemovie;