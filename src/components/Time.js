import React from "react"
function Time(props){
    return(
        <div className="time" >
            <h1 className="time1">{props.day}</h1>
            <p>{props.time}</p>
        </div>
    )
}
export default Time