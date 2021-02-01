import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const PirateInfo = (props) => {
    const [pirate, setPirate] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirate/' + props.id)
        .then((res)=>{
            console.log(res)
            setPirate(res.data)
        })
        .catch((err)=>console.log(err))
    },[])


    return(
        <div>
            <div className="header">
                <h1>{pirate.name}</h1>
                <button onClick={() => navigate('/pirates')} className="blueHeaderButton">Crew Board</button>
            </div>
            <div className="body">
                <div className="piratePhrase">
                    <h1>"{pirate.catchPhrase}"</h1>
                </div>
                <div className="pirateInfo">
                    <h1>About</h1>
                    <p>Position: {pirate.position}</p>
                    <p>Treasures: {pirate.treasure}</p>
                </div><br></br><br></br>
                
            </div>

            
            

        </div>
    )
}

export default PirateInfo;