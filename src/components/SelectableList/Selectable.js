import React from 'react'
//import ReactDOM from 'react-dom';

   
const Selectable = ({content, fn}) => {
    return(
        <div>
            {content.map(e => {
               return <Item content={e.value} selected={e.selected} onClick={() => fn(e)}/> 
            })}
        </div> 
    )
}

const Item =({content, selected, onClick}) => {
    if (selected){
        return (
            <div onClick={onClick}>
                <Bold content={content}/>
            </div>
        )
    }
  return (
            <div onClick={onClick}>
                <Normal content={content}/>
            </div>
        )    
}

const Normal = ({content}) => {
    return(
        <div>
        {content} 
        </div>
        )
}

const Bold = ({content}) => {
    return(
        <div>
        <strong> {content} </strong>
        </div>
        )
}


export default Selectable