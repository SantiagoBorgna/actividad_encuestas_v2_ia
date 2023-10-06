// crear una navbar que tenga dos botones, inicio y crear encuesta
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/encuesta/crear">Crear Encuesta</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;