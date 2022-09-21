import React from 'react'
import loading from '../loding.gif'

const Spinner = () => {
        return (
            <div className="text-center">
                <img src={loading} alt="Loading" className="my-3" />
                <h4>Loading</h4>
            </div>
        )
    }

export default Spinner
