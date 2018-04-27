import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import App from './App'

const reducer = (state, action) => {
    return [...state, action.payload]
}

const store = createStore(reducer, [], applyMiddleware(logger))

export default store

const render = () => {
    return ReactDOM.render(<App />, document.getElementById('root'))
}

render()
store.subscribe(render)
