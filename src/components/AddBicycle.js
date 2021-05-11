import React from 'react'

const AddBicycle = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Company</label>
                <input type="text" placeholder='Add Company'/>
            </div>
            <div className="form-control">
                <label>Type</label>
                <input type="text" placeholder='Add Type'/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Available</label>
                <input type="checkbox" />
            </div>
            <input className="btn" type="submit" value="Save Bike"></input>
        </form>
    )
}

export default AddBicycle
