import React from 'react'
import './ListItems.css'

export default function ListItems(props) {
    const constlistItem = props.items;
    return (
        <div>
            {
        constlistItem.map((listitem)=> <div className="list" key={listitem.key}><p>{listitem.inputText}
        <span onClick={()=>props.deleteItems(listitem.key)}>X</span></p>
        </div>)
            }
            
        </div>
    )
}
