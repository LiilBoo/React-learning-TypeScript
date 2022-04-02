import './Item.css'
import imgBiKing from "../../Assets/imgBiKing.jpg";

export function Item() {

    const myLetter = "g";

    return (
    <>
    <h1 className="item-title">Hello from Item component</h1>
			<img
				src={
					"https://images.unsplash.com/photo-1543092587-d8b8feaf362b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
				}
				alt=""
			/>
			<img src={imgBiKing} alt="" />
            <img src={process.env.PUBLIC_URL + `/Shanks_1.jp${myLetter}`} alt="duh"/>
    </>
    )

};