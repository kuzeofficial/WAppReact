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
                    <div className="card card-info">
                        <p>
                            Location: {props.city}, {props.country}
                        </p>
                        <p>
                            Temperature: {props.temperature} °C, {props.description}
                        </p>
                        <p>
                            Humidity: {props.humidity}
                        </p>
                        <p>
                            Wind Speed: {props.wind_speed}
                        </p>
                    </div>
                :
                <div className="card card-info">
                    <p>No request yet</p>
                </div>
            }

        </div>

    )
}

export default WeatherInfo
