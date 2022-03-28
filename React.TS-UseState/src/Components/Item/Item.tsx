interface Item {
    
    title: string;
    txt: string;
}


export function Item(properties: Item) {

    const { title, txt,} = properties;
    console.log(`Item properties : ${properties}`);
    
  return (
    <>
        <h1>{title}</h1>
        <p>{txt}</p>
    </>
  )
}