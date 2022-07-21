import React, { Component } from 'react'

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    createPageLinks = (navRoutes) => {
        return navRoutes.map((navRoute) => {
            return (<li key={navRoute.name}>
                <a href={navRoute.url}>{navRoute.name}</a>
            </li>)
        })
    }

    render = () => {
        const {navRoutes} = this.props
        const links = this.createPageLinks(navRoutes);
        return (<ul>
            {links}
        </ul>)
    }
}

export default Nav