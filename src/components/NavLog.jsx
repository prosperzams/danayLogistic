import React from 'react';
import './css/NavLog.css'
import { NavLink } from 'react-router-dom';

const NavLog = () => {
    return (
        <main>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand px-3" href="#">
                        <img src="/images/LOGO1.png" className='img' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <NavLink 
                                    className={({isActive}) => isActive?
                                     'nav-link active' : 'nav-link'}
                                    to="/home">
                                    Nouveau
                                </NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink 
                                    className={({isActive}) =>isActive?
                                     'nav-link active' : 'nav-link'}
                                    to="/visualize">
                                    Visualiser
                                </NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink 
                                    className={({isActive}) =>isActive?
                                     'nav-link active' : 'nav-link'}
                                    to="/database">
                                    Données
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </main>
    );
};

export default NavLog;