import React, { Component } from 'react'
import WeatherInfo from './components/WeatherInfo'
import WeatherForm  from './components/WeatherForm';
import  { WEATHER_KEY } from './key'
class App extends Component {
    getWeather = async  e => {
        e.preventDefault()
        const { city, country } = e.target.elements
        const cityValue = city.value
        const countryValue = country.value

        const API_URL = `api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}`
        const response = await fetch(API_URL, )
        const data =  JSON.stringify(response)
        const res = JSON.parse(data)
        console.log(res)
    }
    render(){
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto ">
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherInfo/>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;