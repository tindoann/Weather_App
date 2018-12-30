import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <div className='weather__info'>
        { 
          this.props.city && this.props.country && <p className='weather__key'> Location: 
            <span className='weather__value'> { this.props.city }, { this.props.country } </span>
          </p> 
        }
        { 
          this.props.temperature && <p className='weather__key'>Temperature:
            <span className='weather__value'> { this.props.temperature } </span>
            </p> 
        }
        { 
          this.props.humidity && <p className='weather__key'>Humidity: 
          <span className='weather__value'> { this.props.humidity } </span>
        </p>
        }
    
        { 
          this.props.description && <p className='weather__key'>Condition: 
          <span className='weather__value'> { this.props.description } </span>
          </p> 
        }
        { 
          this.props.error && <p className='weather__key'>{ this.props.error } </p> 
        }
      </div>
      );
  }
}

export default Weather; 

// stateless functional components, in the main component, we need it to be a class component
// if you are only returning one single element you can actually explicitly return it by getting rid of the 
// return keyword and the curly braces and replace it with a pair of parentheses this means that you are 
// are explicitly returning something from the arrow function

// if you are only returning one single single argument in an arrow function then you can even get rid of 
// these parentheses so