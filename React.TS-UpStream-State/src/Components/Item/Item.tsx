import { useState } from "react";
import './Item.css'



interface Item {

    number?: number;
    txt?: string;
    propertiesFunction: (event:any) => void;
}

export function Item(properties: Item) {
 
    const { number, txt, propertiesFunction } = properties;

    const [itemState, setItemState] = useState<any>(`useState of Item state !`);


return (
    <>
        <h1 className="item-title">Hello from Item component</h1>
    <button onClick={() => propertiesFunction(itemState)}>
        Changing Item State ?
    </button>
    </>
    )
    
};