import React, { Component } from 'react';
import './App.scss';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'b60d9e236dd5cd1456c092e87941cc77'; 
class App extends Component {

  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async (e) => {

    e.preventDefault();
    
    const 
          city = e.target.elements.city.value,
          country = e.target.elements.country.value,
          API = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`),
          data = await API.json();

          country && city ? (
            this.setState({
              temperature: data.main.temp,
              city: data.name,
              country: data.sys.country,
              humidity: data.main.humidity,
              description: data.weather[0].description,
              error: ''
            })
          ): (
            this.setState({
              temperature: '',
              city: '',
              country: '',
              humidity: '',
              description: '',
              error: 'Plase Enter City & Country'
            })
          )
  }

  render () {
    return (
      <div className="App">
        <div className="container">
          <Form getWeather={this.getWeather}  />
          <Weather
            temperature= {this.state.temperature}
            city= {this.state.city}
            country= {this.state.country}
            humidity= {this.state.humidity}
            description= {this.state.description}
            error= {this.state.error}
          />
        </div>
      </div>
    )

  }

}

export default App;
