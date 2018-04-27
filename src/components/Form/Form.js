import React from 'react'
import { MyInput } from './MyInput'


class Form extends React.Component {
  
  constructor(props){
    super(props)
    
      this.state = this.createState(this.props.layout);
      
      this.createState = this.createState.bind(this);
      this.displayData = this.displayData.bind(this);
      this.displayValidity = this.displayValidity.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.validateField = this.validateField.bind(this);
      this.changeDetails = this.changeDetails.bind(this);
  }

  createState(layout) {
    return layout.reduce(
      (a, v, i) => {
       return {...a, [i] : {payload: '', ...v}}
      }
    ,{})
  }
  
  displayData() {
    return Object.keys(this.state).map(e => 
        ' ' + this.state[e].payload 
      )
  }
  
  displayValidity() {
    return Object.keys(this.state).map(e =>
        ' ' + this.state[e].isValid
    )
  }
  
  onSubmit() {
      alert('Data submitted:' + this.displayData() + this.displayValidity());
  }
  
  validateField(value, id) {
  
  let inputId = id;
  let isValid = this.state[inputId].validate(value);

    let statusCopy = Object.assign({}, this.state);
      statusCopy[inputId].isValid = isValid;
      this.setState(statusCopy);
    
  }
  
  changeDetails(value, id) {
    let inputId = id;
    let inputValue = value;
    let statusCopy = Object.assign({}, this.state);
    statusCopy[inputId].payload = inputValue;
     this.setState(statusCopy, () => { this.validateField(inputValue, inputId)});
    }
 
  render() {
    console.log(this.state)
    return(
      <form onSubmit={this.onSubmit}>  
          {Object.keys(this.state).map((e) => 
            <MyInput key={e} name={this.state[e].title} id={e} type={this.state[e].type} title={this.state[e].title} onChange={this.changeDetails} isValid={this.state[e].isValid}/>)}
          <input type="submit" value="Submit"/>
      </form>  
      )
      
  }
}




export default Form