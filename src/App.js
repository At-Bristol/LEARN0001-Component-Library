import React from 'react'
//import store from './index'
//import Input from './components/Input'
//import List from './components/List'
import Form from './components/Form/Form'
//import Selectable from './components/SelectableList/Selectable'


const layout = [                
    {                       
      title: "Name",
      type:  "text",
      validate: (value) => {
        if (value.length >= 2) {
          return true;
        }
        else {
          return false;
        }
      },
      validationErrorMessage: 'Invalid name',
      payload:  ""  
    },
    {
      title: "Date of Birth",
      type:  "date",
      validate: (value) => {
        if (value.length === 10) {
          return true;
        }
        else {
          return false;
        }
      },
      validationErrorMessage: 'Invalid date',
      payload:  ""
    },
    {
      title: "Date today",
      type:  "date",
      validate: (value) => {
        if (value.length === 10) {
          return true;
        }
        else {
          return false;
        }
      },
      validationErrorMessage: 'Invalid date',
      payload:  ""
    }
  ]

const App = () => {
    return(
        <div>
          <Form layout={layout} />
        </div>
    )
}

/*
const App = () => {
    return(
        <div>
          <Selectable />
          <Form />
          <Input />
          <List listContent={['Mercury', 'Venus', 'Earth']}/>
          <List listContent={store.getState()}/>
        </div>
    )
}
*/

export default App