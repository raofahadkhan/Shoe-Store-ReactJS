import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import ProductIndex from "./components/ProductIndex";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="products" element={<Product />}>
					<Route path="/" element={<ProductIndex />}></Route>
					<Route path=":productID" element={<ProductDetails />}></Route>
				</Route>
				<Route path="about" element={<About />}></Route>
				<Route path="contact" element={<Contact />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
