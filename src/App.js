// import { useState } from "react"
// import ProductList from "./components/ProductList";
// function App() {
// const [product, setProduct] = useState(
// [
// {id: 1, title: 'Product 1', price: 899},
// {id: 2, title: 'Product 2', price: 982},
// {id: 3, title: 'Product 3', price: 322},
// {id: 4, title: 'Product 4', price: 763},
// {id: 5, title: 'Product 5', price: 389}
// ]);
// return (
// <div>
// <ProductList products={product}></ProductList>
// </div>
// );
// }
// export default App;

// import { useState } from "react"
// import ProductList from "./components/ProductList";
// function App() {
// const [product, setProduct] = useState(
// [
// {id: 1, title: 'Product 1', price: 899},
// {id: 2, title: 'Product 2', price: 982},
// {id: 3, title: 'Product 3', price: 322},
// {id: 4, title: 'Product 4', price: 763},
// {id: 5, title: 'Product 5', price: 389}
// ]
// );
// const deleteProduct = (productId) => {
// const newProducts = product.filter(product => product.id !== productId);
// console.log(newProducts);
// setProduct(newProducts);
// }
// return (
// <div>
// <ProductList products={product} deleteProduct={deleteProduct}></ProductList>
// </div>
// );
// }
// export default App;

// import { useEffect, useState } from "react"
// import ProductList from "./components/ProductList";
// function App() {
// const [product, setProduct] = useState(
// [
// {id: 1, title: 'Product 1', price: 899},
// {id: 2, title: 'Product 2', price: 982},
// {id: 3, title: 'Product 3', price: 322},
// {id: 4, title: 'Product 4', price: 763},
// {id: 5, title: 'Product 5', price: 389}
// ]
// );
// const deleteProduct = (productId) => {
// const newProducts = product.filter(product => product.id !== productId);
// console.log(newProducts);
// setProduct(newProducts);
// }
// useEffect(() => {
// console.log('Use Effect Running');
// });
// return (
// <div>
// <ProductList products={product} deleteProduct={deleteProduct}></ProductList>
// </div>
// );
// }
// export default App;

// import { useEffect, useState } from "react"
// import ProductList from "./components/ProductList";
// function App() {
// const [product, setProduct] = useState(
// [
// {id: 1, title: 'Product 1', price: 899},
// {id: 2, title: 'Product 2', price: 982},
// {id: 3, title: 'Product 3', price: 322},
// {id: 4, title: 'Product 4', price: 763},
// {id: 5, title: 'Product 5', price: 389}
// ]
// );
// const deleteProduct = (productId) => {
// const newProducts = product.filter(product => product.id !== productId);
// console.log(newProducts);
// setProduct(newProducts);
// }
// const [name, setName] = useState("Blangkon");
// useEffect(() => {
// console.log('Fungsi Use Effect Dijalankan !!');
// });
// return (
// <div>
// <ProductList products={product} deleteProduct={deleteProduct}></ProductList>
// <hr />
// <button onClick = { ()=>setName('Cemplon') } > Cemplon </button>
// <button onClick = { ()=>setName("Blangkon") }> Blangkon </button>
// <p> Nama = {name} </p>
// </div>
// );
// }
// export default App;

// import React from 'react';
// import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// import {useParams} from 'react-router-dom';
// function App() {
// return (
// <Router>
// <div>
// <nav>
// <ul>
// <li>
// <a href="/">Home</a>
// </li>
// <li>
// <a href="/about">About</a>
// </li>
// <li>
// {/* Bisa juga menggunakan Link to */}
// <Link to="/users/4200">Users 4200</Link>
// </li>
// <li>
// {/* Link ke all routes */}
// <Link to="/link-tidak-ada">Link tidak ada</Link>
// </li>
// </ul>
// </nav>
// <hr />
// {/* Wrap your Route components in a Routes component */}
// <Routes>
// <Route path="/about" element={<About />} />
// {/* path dinamis */}
// <Route path="/users/:userId" element={<Users />} />
// <Route path="/" element={<Home />} />
// {/* Wildcart, Jika tidak ada yang cocok maka menjalankan route ini */}
// <Route
// path="*"
// element={
// <div>
// <h2>404 Page not found </h2>
// </div>
// }
// />
// </Routes>
// </div>
// </Router>
// );
// }
// export default App;
// // components bisa juga ditulis langsung spt contoh dibawah, atau kita import dari file lain
// // style sbg const
// const Home = () => {
// return <h2>Home</h2>;
// }
// // sebagai function
// function About() {
// return <h2>Tes Tes</h2>;
// }
// function Users() {
// const params = useParams();
// return <h2>Users: {params.userId}</h2>;
// }

import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
// import About from "./components/About";
function App() {
return (
<Router>
<div>
<div className="container">
<div className="columns">
<div className="column is-half is-offset-one-quarter">
<Routes>
<Route path="/" element={<ProductList />} />
<Route path="/add" element={<AddProduct />} />
<Route path="/edit/:id" element={<EditProduct />} />
</Routes>
</div>
</div>
</div>
</div>
</Router>
)
}
export default App;


