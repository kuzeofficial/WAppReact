import React from 'react'

const WeatherInfo = (props) => {
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?
                    <div className="card card-info mt-1 text-center bg-light">
                        <img src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/01/weather-app.png"/>
                        <div className="card-body text-black">
                            <h4 className="card-title">{props.city}, {props.country}</h4>
                            <p className="card-text text-primary">Temperature: {props.temperature} °C, {props.description} </p>
                            <p className="card-text text-secondary">Humidity: {props.humidity}</p>
                            <p className="card-text text-secondary">Wind Speed: {props.wind_speed}</p>
                        </div>
                    </div>
                :
                <div className="card card-info mt-2 bg-light">
                    <p className="card-text text-primary text-center">No request yet</p>
                </div>
            }

        </div>

    )
}

export default WeatherInfo
