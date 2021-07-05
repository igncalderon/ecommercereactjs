import { Item } from "../Item/Item"
import { Fragment } from "react"
import './ItemList.css'
export const ItemList = ({items}) => {
    console.log(items)
    return(
        <div>
             <div className='ItemList'>
             {
                items.map(item => <Item item={item}></Item>)
            }

            
        </div>
           
        </div>
       
        
    )
}