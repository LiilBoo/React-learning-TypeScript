import React from 'react'

interface Item {
    
    title: string;
    txt: string;
}


export function Item(properties: Item) {

    const { title, txt,} = properties;
    console.log(`Item properties : ${properties}`);
    
  return (
    <React.Fragment>
        <h1>{title}</h1>
        <p>{txt}</p>
    </React.Fragment>
  )
}
