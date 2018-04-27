import React from 'react'

const List = ({listContent}) => {
    return(
        listContent.map(e => 
            <Item content={e}/>
        )    
    )
}

const Item = ({content}) => {
    return(
        <div>
          {content}
        </div>
    )
}

export default List