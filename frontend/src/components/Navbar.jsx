import React from 'react'
import { Link } from 'react-router-dom'
import { PageData } from './PageData'

const Navbar = () => {
    return (
        <div className="navbar">
            {PageData.map((page) => {
                return (
                    <Link to={page.path} key={page.path}>
                        <button>
                            {page.name}
                        </button>
                    </Link>
                )
            })}
        </div>
    )
}

export default Navbar