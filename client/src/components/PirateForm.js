import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import '../App.css';

const PirateForm = () => {

    const [name,setName] = useState("")
    const [treasure,setTreasure] = useState(0)
    const [phrase, setPhrase] = useState("")
    const [position,setPosition] = useState("")
    
    const [nameError, setNameError] = useState("")
    const [phraseError, setPhraseError] = useState("")

    const submitPirate = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirate/new',{
            name:name,
            treasure:treasure,
            position:position,
            catchPhrase:phrase,
        })
        .then((res)=>{
            console.log(res.data)
            navigate('/pirates')    
        })
        .catch((err) => {
            console.log(err.response);
            setNameError(err.response.data.errors.name.message);
        })
    }

    const phraseHandler = (e) => {
        setPhrase(e.target.value)
        if(phrase.length < 3){
            console.log("what?")
            setPhraseError("Phrase must be longer than 3 characters")
        }
        else(setPhraseError(""))
    }

    return(
        <div>
            <div className="header">
                <h1>Add Pirate</h1>
                <button onClick={() => navigate('/pirates')} className="blueHeaderButton">Crew Board</button>
            </div>
            <form onSubmit={submitPirate} className="body">
                <div className="formLeft">
                    <label>Pirate Name: </label>
                    <input type="text" onChange={(e)=>setName(e.target.value)}></input><br></br>
                    {nameError !== undefined ? <p>{nameError}</p> : null }
                    <label># Of Treasure Chests: </label>
                    <input type="number" min="0" max="100" onChange={(e)=>setTreasure(e.target.value)}></input><br></br>
                    <label>Pirate Catch Phrase: </label>
                    <input type="text" onChange={phraseHandler}></input>
                </div>
                 { phraseError !== "" ? 
                    (<div>
                        { phraseError }
                    </div>
                    ) :
                    null
                    }
                <div className="formRight">
                    <label>Crew Position: </label>
                    <select onChange={(e)=>setPosition(e.target.value)}>
                        <option>Captain</option>
                        <option>First Mate</option>
                        <option>Quarter Master</option>
                        <option>Boatswain</option>
                        <option>Powder Monkey</option>
                    </select><br></br>
                
                {/* <label>Peg Leg</label>
                <input type="checkbox"></input>
                <label>Eye Patch</label>
                <input type="checkbox"></input>
                <label>Hook Hand</label>
                <input type="checkbox"></input> */}
                    <input type="submit" value="Add Pirate" className="blueButton"/>
                </div>
            </form>
        </div>
    )
}

export default PirateForm;