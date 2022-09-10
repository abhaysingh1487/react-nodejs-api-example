import React from 'react'

export const DisplayBoard = ({numberOfEvents, getAllEvents}) => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }
    
    return(
        <div style={{backgroundColor:'green'}} className="display-board">
            <h4 style={{color: 'white'}}>Events Created</h4>
            <div className="number">
            {numberOfEvents}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllEvents()} className="btn btn-warning">Get all Events</button>
            </div>
        </div>
    )
}