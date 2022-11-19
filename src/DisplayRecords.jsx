function DisplayRecords({key,name,DOB}){
    return(
        <div key={key}>
            <h1> {name} {DOB}</h1>
        </div>
    )
}
export default DisplayRecords;