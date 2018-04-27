import React from 'react'
import store from '../index.js'
const Input = () => {
    
    let output = ''
    return(
        <div>
          Input: <input ref={val => output = val }/>
          <input type='button' value='Click me' onClick={() => store.dispatch({type: 'ADD', payload: output.value})}/>
        </div>
        )
}


export default Input