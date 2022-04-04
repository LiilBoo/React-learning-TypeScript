


interface Item {
    txt?: string;
    id? : string & number;
    deleteFunction(event: any) : void;
}

export function Item(properties : Item) {

    const { txt, id, deleteFunction } = properties;

    return (
        <li className="border d-flex justify-content-between align-items-center p-2 m-2">
        <div className="p-3">{txt}</div>
        <button 
        className="btn btn-danger p-2 h-50"
        onClick={() => deleteFunction(id)}
        >
            Delete
        </button>
    </li>
    )

};