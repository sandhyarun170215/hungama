import { useEffect , useState } from "react";

const useFetch = (request) => {
    let [data,setdata] = useState(null);
    let[pending, setPending] = useState(true);
    let[error, SetError] = useState(null);


useEffect(()=>{
    setTimeout(() => {
        fetch(request)
    .then((response)=>{
        if(response.ok===false)
        {
            throw Error("Data not found , please try for different resourse");
        }
        
        return (response.json());
         
         })
         .then( (data)=>{ setdata(data); setPending(false); } )
         .catch((error)=>{ SetError(error.message); setPending(false); })
         }, 3000);
        } , [])

return {data , pending, error}        
    }
    export default useFetch;
