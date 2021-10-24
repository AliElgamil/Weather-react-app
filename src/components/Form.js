
import React from 'react';

const Form = (props) => {
    
    return (
        
            <form onSubmit={props.getWeather}>
                <div className='input'>
                    <input type='text' name='city' placeholder='City...' />
                    <span className='border'></span>
                </div>
                <div className='input'>
                    <input type='text' name='country' placeholder='Country...' />
                    <span className='border'></span>
                </div>
                <button>Get Weather</button>
            </form>
        
    ) 
}

export default Form;