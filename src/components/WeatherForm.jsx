import React from 'react'

const WeatherForm = (props) => {
    return (
        <div className="card card-body bg-transparent border-light">
            <form onSubmit={props.getWeather}>
                <div className="form-group">
                    <input type="text" name="city" placeholder="Name City" className="form-control bg-transparent" autoFocus />
                    <input type="text" name="country" placeholder="Name Country" className="form-control mt-3 bg-transparent" />
                </div>
                <button className="btn btn-danger inline-block mt-3">Get Weather</button>
            </form>
        </div>
    )
}

export default WeatherForm
