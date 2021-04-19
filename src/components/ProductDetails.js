import React from "react";
import { useParams } from "react-router";
import shoes from "./../shoes.json";
function ProductDetails() {
	const { productID } = useParams();
	const product = shoes[productID];
	const { name, img } = product;

	return (
		<div>
			<h2>Details of: {name}</h2>
			<img src={img} alt={name} height={500} />
		</div>
	);
}

export default ProductDetails;
