import {Link} from "react-router-dom"
const Notfoundpage = ()=>{
    return(
        <div>
            <h1>404: page not found</h1>
            <Link to ="/">go back to home page</Link>
        </div>
    );
}
export default Notfoundpage;