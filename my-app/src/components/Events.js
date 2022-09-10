import React from 'react'

export const Events = ({events}) => {

    console.log('events length:::', events.length)
    if (events.length === 0) return null

    const EventRow = (event,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{event.firstName}</td>
                  <td>{event.lastName}</td>
                  <td>{event.eventDescription}</td>
                  <td>{event.partyCount}</td>
                  <td>{event.email}</td>
              </tr>
          )
    }

    const eventTable = events.map((event,index) => EventRow(event,index))

    return(
        <div className="container">
            <h2>Events</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Event Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>EventDescription</th>
                    <th>PartyCount</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {eventTable}
                </tbody>
            </table>
        </div>
    )
}