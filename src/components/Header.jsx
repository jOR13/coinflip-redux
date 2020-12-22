import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary justify-content-between">
                <div className="container">
                    <h1><Link to={'/'} className="text-light" >REACT</Link></h1>
                </div>

                <Link to={"/productos/nuevo"} className="btn btn-danger d-block d-md-inline-block" >Add +</Link>
            </nav>
        </>
    );
}

export default Header;
