import { useEffect, useState } from "react";

function About(){
    const [dummy,setDummy]=useState();
    useEffect(()=>{ fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json =>setDummy(json))},[])
   
    return <>{dummy?.map((dum)=><h1>{dum?.title}</h1>)}</>

}
export default About;