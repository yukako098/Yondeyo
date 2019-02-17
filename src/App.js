import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/style.css";
import Navbar from "./components/Navbar";

// import ProductList from "./components/ProductList";
// import Details from "./components/Details";
// import Default from "./components/Default";
// import Cart from "./components/Cart";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                {/* <ProductList />
                <Details />
                <Cart />
                <Default /> */}
            </React.Fragment>
        );
    }
}

export default App;
