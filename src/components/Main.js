import React, { useState, useEffect } from "react";
import { FetchAllPlayers } from "./Create.js";
import AllPuppies from "./Cards"

export const Main = () => {
    const [puppies, setPuppies] = useState([]);
    
    useEffect(() => {
        FetchAllPlayers(setPuppies)
    }, []);
    console.log(setPuppies)
    
return (
    <div>
        <h1>Welcome to Puppy Bowl</h1>
        <div id="navbar"></div>
            <AllPuppies puppies = {puppies}/>
    </div>
);
}
