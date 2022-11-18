import getAllRecords from './firebase/getAllRecords';
import {useEffect,useState} from 'react';
import DisplayRecords from './DisplayRecords';

function Record(){
    const [records, setRecords] = useState([]);
    useEffect(() => {
        get();
    }, []);
    async function get(){
        await getAllRecords().then((res) =>{
            setRecords(records => [...records,res]);
            console.log(records);
        });
    }
    return (
        <div>
            {records.length===0 ?  
                records.map((dict)=>{
                    <DisplayRecords key={1} name={dict.name} dob={dict.DOB}/>
                })
            : <h1>There are no records</h1>
            }
        </div>
    )
}

export default Record;