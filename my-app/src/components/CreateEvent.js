import React from 'react'


const CreateEvent = ({onChangeForm, createEvent }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create Event</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">First Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Last Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="lastname" id="lastname" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Event Description</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="eventDescription" id="eventDescription" aria-describedby="emailHelp" placeholder="Event Description" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Party Count</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="partyCount" id="partyCount" placeholder="Party Count" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createEvent()} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateEvent