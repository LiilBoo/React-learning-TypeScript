import { useState, ChangeEventHandler, MouseEventHandler, FormEvent, FormEventHandler } from 'react';
import { Item } from '../Item';
import { v4 as uuidv4 } from 'uuid'

interface Item {
    txt?: string;
    id? : any;
    deleteFunction(event:any) : void;
}


export function Form() {


    const [dataArray, setDataArray] = useState<any>([
        {txt: "Learn React.JS",
        id:uuidv4()},
        {txt: "Learn React.TS",
        id:uuidv4()},
        {txt: "Learn Vue",
        id:uuidv4()},
        {txt: "Learn Angular",
        id:uuidv4()},
        {txt: "Learn Next.js",
        id:uuidv4()},
        {txt: "Learn Nuxt",
        id:uuidv4()},
        {txt: "Touch Hydrogen, Blitz, Gatsby, Remix",
        id:uuidv4()},
        {txt: "Learn Java 11 SpringBoot",
        id:uuidv4()},
        {txt: "Learn DevOps",
        id:uuidv4()},
    ]);

    const deleteElement = (id:any) => {
            const filteredState = dataArray.filter((item : Item) => {
                return item.id !== id
            })

            setDataArray(filteredState);
    };

    const [stateInput, setStateInput] = useState<any>();

    const linkedInput : ChangeEventHandler<HTMLInputElement> = (event) => {
        
        setStateInput(event.target.value);
    };

    const addToDo : FormEventHandler<HTMLFormElement> = (event ) => {
    
        event.preventDefault();
        
        // const newArray = [...dataArray];
        // const newToDoItem = {
        //     // txt: "default value for runtime",
        //     // id: "default values for runtime",
        // } as Item;

        // newToDoItem.txt = stateInput;
        // newToDoItem.id = uuidv4();

        // newArray.push(newToDoItem);
        // setDataArray(newArray);

        //!Refactored

        const newToDoItem = {txt: stateInput, id : uuidv4()}
        const newArray = [...dataArray, newToDoItem]
        setDataArray(newArray)
        setStateInput("");
         
    };

    return (
    
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

        <form  
        onSubmit={(event) => addToDo(event)}
        className="mb-3">
            <label htmlFor="todo" className="form-label mt-3">
                Write an imperative here
            </label>
            <input 
            type="text"
            className="form-control"
            id="todo"
            value={stateInput}
            onChange={(event) => linkedInput(event)}
            />
            <button className="mt-2 btn btn-primary d-block">Send</button>
            </form>

            <h2>Stuf you gotta do</h2>
            <ul className="list-group">
           {
               dataArray.map((item : Item) => {
                    const { txt, id, } = item;
                return <Item 
                txt={txt}
                key={id}
                id={id}
                deleteFunction={deleteElement}
                />
               })
           }
            </ul>
    </div>
    )

};