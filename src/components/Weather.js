
import React from 'react';

const Weather = (props) => {
    
        return (
            
                <ul>
                    {
                        props.temperature && <li>Temperature: <span>{props.temperature}</span></li>
                    }
                    {
                        props.city && <li>City: <span>{props.city}</span></li>
                    }
                    {
                        props.country && <li>Country: <span>{props.country}</span></li>
                    }
                    {
                        props.humidity && <li>Humidity: <span>{props.humidity}%</span></li>
                    }
                    {
                        props.description && <li>Description: <span>{props.description}</span></li>
                    }
                    {
                        props.error && <li>Error: <span>{props.error}</span></li>
                    }
                </ul>
            
        )
    
}

export default Weather;