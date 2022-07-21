import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import UserPage from './user/UserPage.jsx'
import LoginPage from './user/LoginPage.jsx';
import CartPage from './cart/CartPage.jsx'
import ProductsPage from './products/ProductsPage.jsx'
import HomePage from './home/HomePage.jsx'
import Nav from './layout/Nav.jsx'
import NavRoutes from './configs/NavRoutes.json'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            path: window.location.pathname
        }
        this.pages = {
            "/": <HomePage />,
            "/products/": <ProductsPage />,
            "/cart/": <CartPage />,
            "/user/": <UserPage />,
            "/user/logIn/": <LoginPage />,
        }
    }

    render = () => {
        const page = this.pages[this.state.path]
        return (
            <div>
                <Nav navRoutes={NavRoutes} />
                {page}
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);