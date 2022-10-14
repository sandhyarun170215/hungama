import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const Addmovies = () =>{

    const [hero, setHero] = useState("");
    const [movieName, setmovieName] = useState("");
    const [director, setdirector] = useState("");
    const [genere, setgenere] = useState("");
    const [ratings,setratings] = useState("");

    let{data: movies}= 
    useFetch(" http://localhost:4000/moviesList" );

    let history = useHistory();

    let handleSubmit = (e)=>{

        e.preventDefault();

        let movie = {movieName , hero , director , genere , ratings};
        //check current movie is present in db or not

        var duplicate = movies.some((m)=>{ return m.movieName === movieName});

        if(duplicate===false)
        {
            fetch(" http://localhost:4000/moviesList" , 
        {method:"POST", 
        headers:{"Content-Type": "application/json"}, 
        body: JSON.stringify(movie) })

        .then(()=>{history.push("/")})
        }
        else
        {
            alert("Movie already existing , please try to add new movie");
        }
    }

    return (
        
        <div className="add-movie">
            <h1> Add the New movie</h1>
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
                <label>Ratings in IMDB: </label> 
                <input type="text" value={ratings} onChange={(e)=>{setratings(e.target.value);}}/>
                </div>
                <input type="submit" value="Add movie"/>
            </form>
        </div>
    );
}

export default Addmovies;