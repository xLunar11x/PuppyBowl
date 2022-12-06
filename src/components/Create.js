import React from 'react'


const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/';

export const FetchAllPlayers = async (setPuppies) => {
    try{
        const response = await fetch(`${APIURL}players`);
        const results = await response.json();
        setPuppies(results.data.players)
         if (results.error) { throw results.error;
    } return results.data.players
    } catch (err) {
        console.error("Ope, trouble fetching players!", err);
    }
};