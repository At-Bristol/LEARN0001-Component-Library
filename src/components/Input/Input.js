import React from 'react' 
import styled, { css } from 'styled-components'
import { H1, H2, H3, H4, P, HValid, HInValid } from './typography'

const DefaultInput = styled.input`
    
    -webkit-appearance: none;
    box-sizing: border-box;
    font-size: 1.1em;
    width: 260px;
    height: 30px;
    outline: none;
    display: block;
    border: none;
    border-top-right-radius: 7px;
    border-bottom: 2px solid #a9a8a6;
    color: black;
    font-family: FS Elliot;
    background: white;
    font-size: width/15;
    transition: .5s ease;
    padding: 15px 10px 15px 6px;
        
    &:hover {
    outline: none;
    transition: .5s ease ;
    left: 0%;
    }

    &:focus {
    outline: none;
    background: whitesmoke;
    width: 260px;
    border-bottom: 2px solid #17aeaf;
    transition: .5s ease ;
    left: 0%;
    }

`;
     
const ValidInput = DefaultInput.extend`
    border-bottom: 2px solid #17aeaf;
    
    &:focus {
    background: white;
    }
`;

const InvalidInput = DefaultInput.extend`
    border-bottom: 2px solid #e52f30;
    
    &:focus {
    background: white;
    }
`;

const TitleBreak = ({title, isValid}) => {
    return(
    isValid ? <HValid> {title} </ HValid> : <HInValid> {title} </ HInValid>
    )
}

const ValidStyle = ({}) => {}

const NotValidStyle = ({}) => { }

const elementClicked = (value) => console.log(value)

const isFunction = (fn) => typeof fn === 'function'

const Input = ({ 
    type = 'text',
    title,
    placeholder,
    isValid = null,
    validate,
    value,
    errorMessage 
    }) => {
    
    let output = ''

    const handleChange = (validate) => {console.log(output.value)}
    
    const ValidationMessage = ({isValid, errorMessage}) => {
        return(
            errorMessage ? <P>❗{errorMessage}</P> : null 
        )
    }

    return (

        <div>
            <input
                type={type}
                placeholder={placeholder}
                ref={val => output = val}
                onChange= {handleChange}
                onClick={elementClicked(output.value)}
                value={value}
                errorMessage={errorMessage}
                //onChange= {() => console.log(output.value, output.value.length)}
            />
            
            { validate ?  <ValidationMessage errorMessage={errorMessage}/> : null }

            <TitleBreak 
                title={title} 
                isValid={isValid}
            />

        </div>
    )
  
}


export default Input