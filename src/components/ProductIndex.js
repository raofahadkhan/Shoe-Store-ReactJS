import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import shoes from "./../shoes.json";
function ProductIndex() {
	return (
		<div className="productContainer">
			{Object.entries(shoes).map(([productID, { name, img }]) => (
				<Link to={productID} className="link" key={productID}>
					<h2>{name}</h2>
					<img src={img} alt={name} height={150} />
				</Link>
			))}
		</div>
	);
}

export default ProductIndex;
