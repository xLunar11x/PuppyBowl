import React from "react";

 const AllPuppies = (props) => {
    return (
        <div id = "playercontainer">
            {  
            props.puppies.length ? props.puppies.map ((puppy) => {
                
                return (
                    <div className="puppyCard" key={puppy.id}>
                        <p>{puppy.id}</p>
                        <p>{puppy.name}</p>
                        <img id="puppyImg" src={puppy.imageUrl}/>
                        <p>{puppy.breed}</p>
                        <p>{puppy.teamId}</p>
                    </div>
                );
            }) : <h2>No Puppies Here Brother</h2>
            }
            
             
        </div>
    );
}

export default AllPuppies