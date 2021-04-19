import React from "react";
import { Outlet } from "react-router";

function Product() {
	return (
		<div>
			<h4>Products</h4>
			<Outlet />
		</div>
	);
}

export default Product;
