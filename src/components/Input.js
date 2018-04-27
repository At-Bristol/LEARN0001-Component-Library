import React from 'react'
import store from '../index'

const Input = () => {
    
    let output = ''
    return(
        <div>
          Input: <input ref={val => output = val} />
          <input 
            type='button' 
            value='add'
            onClick={ () => store.dispatch({type: 'ADD', payload:output.value}) }
          />
        </div>
    )
}

export default Input