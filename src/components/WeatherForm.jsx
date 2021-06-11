import React from 'react'

const WeatherForm = (props) => {
    return (
        <div className="card card-body">
            <form onSubmit={props.getWeather}>
                <div className="form-group">
                    <input type="text" name="city" placeholder="Name City" className="form-control" autoFocus />
                    <input type="text" name="country" placeholder="Name Country" className="form-control" />
                </div>
                <button className="btn btn-success btn-block">Get Weather</button>
            </form>
        </div>
    )
}

export default WeatherForm
