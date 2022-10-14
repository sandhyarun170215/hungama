import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Addmovies from "./components/Addmovies";
import Moviedetails from "./components/Moviedetails";
import Updatemovie from "./components/Updatemovie";
import Searchpage from "./components/Searchpage";
import Notfoundpage from "./components/Notfoundpage";
import Movieslist from "./components/Movieslist";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/add">
          <Addmovies/>
        </Route>

        <Route path="/moviedetails:id">
          <Moviedetails/>
        </Route>

        <Route path="/search:searchVal">
          <Searchpage/>
        </Route>

        <Route path="*">
          <Notfoundpage/>
        </Route>
     
      </Switch>
      </div>
      
    </Router>
  );
}

export default App;
