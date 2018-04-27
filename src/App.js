import React from 'react'
//import store from './index'
//import Input from './components/Input'
//import List from './components/List'
import Selectable from './components/SelectableList/Selectable'

import Form from './components/Form'

const layout = [                
    {                       
      title: "Name",
      type:  "text",
      isValid: "false",
      payload:  ""  
    },
    {
      title: "Date of Birth",
      type:  "date",
      isValid: "false",
      payload:  ""
    },
    {
      title: "Date today",
      type:  "date",
      isValid: "false",
      payload:  ""
    }
  ]
  
  //validate: () => () ,

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