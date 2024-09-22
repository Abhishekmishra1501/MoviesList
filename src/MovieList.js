import React, { useEffect, useState } from "react";
import "./App.css";

function MovieList () {
    const [data,setData]= useState([]);
    useEffect(()=>{
        fetch('../data/data.json')
        .then(res=>res.json())
        .then(res=>setData(res))
        .catch(err=>console.log(err))
    },[])
    return(
        <>
        <div className="Container">
      {
        data && data.map(post=><><div className="box"><img className="image" src={post.thumbnail}/><h2>{post.title}</h2>
        <hr/>
        <p>Distributor:{post.Distributor}</p>
        <hr/>
        <p>Amount:{post.Amount}</p>
        </div></>)
      }
        </div>
        </>
    )


}
export default MovieList;