// function which adds name and DOB to the database
import {useState} from 'react';
function Add(){
    const [name, setName] = useState('');
    const [DOB, setDOB] = useState('');
    const [error, setError] = useState('');
    
    return(
        <div>
            <h1>Add</h1>
            <form>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <label>DOB</label>
                <input type="date" value={DOB} onChange={(e)=>setDOB(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default Add;