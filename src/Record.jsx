import getAllRecords from './firebase/getAllRecords';
import {useEffect,useState} from 'react';
import DisplayRecords from './DisplayRecords';

function Record(){
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const getUsers = async() =>{
            const data = await getAllRecords();
            setRecords(data.map((doc) => ({...doc})))
        }
        getUsers();
    }, []);


    return (
        <div>
            {records.map((dict)=>{
                return(
                    <DisplayRecords key={dict.name} name={dict.name} DOB={dict.DOB}/>
                    )
            })}
        </div>
    )
}

export default Record;