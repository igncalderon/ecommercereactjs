import { Item } from "../Item/Item"
import './ItemList.css'

export const ItemList = ({items}) => {
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