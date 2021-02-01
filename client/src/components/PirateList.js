import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import {navigate} from '@reach/router';

const PirateList = () => {
    const [pirates, setPirates] = useState([])

    const deleteHandler = (ID) => {
        axios.delete('http://localhost:8000/api/pirate/delete/' + ID)
        .then(res=>console.log(res.data))
        .catch((err)=>console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
        .then((res) =>setPirates(res.data))
        .catch((err) => console.log(err))
    },[{deleteHandler}])

    return(
        <div className="App">
            <div className="header">
                <h1>Pirate Crew</h1>
                <button onClick={()=>navigate('/pirate/new')} className="blueHeaderButton">Add Pirate</button>
            </div>
            <div className="body">
            {pirates.map((pirate,i)=>(
                <>
                    <div className="pirate">
                        <h2>{pirate.name}</h2>
                        <button className="blueButton" onClick={()=>navigate(`/pirate/${pirate._id}`)}>View Pirate</button>
                        <button onClick={(e) => deleteHandler(pirate._id)} style={{marginLeft:"20px"}} className="redButton">Walk The Plank!</button>
                    </div>
                </>
            ))}
            </div>
        </div>

    )
}

export default PirateList;