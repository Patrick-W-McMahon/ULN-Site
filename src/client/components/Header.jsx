import React from 'react';
import { Link } from "react-router-dom";

const Header = ({ title, subtitle }) => (
    <div className="sidebar-header">
        <h3><Link to={`/`} className="navbar-brand">{title} {subtitle ? <sub>{subtitle}</sub>: null}</Link></h3>
    </div>
);

export default Header;