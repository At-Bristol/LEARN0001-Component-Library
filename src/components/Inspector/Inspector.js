import React from 'react'



const Item=({list,value})=>{
    return (
        <h3><b>{list}:-  </b><small>{value}</small></h3>)
}


const Inspector=({content})=>{
    return (
        <div>
        {Object.keys(content).map(keys =>  <Item list={keys} value={content[keys]}/>)} 
           
        </div>
        )
}

export default Inspector
