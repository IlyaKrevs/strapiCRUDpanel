import React from 'react';
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom';

interface NavbarProps {
    myLinks: string[],
}

export default function Navbar({ myLinks }: NavbarProps) {


    return (
        <nav className={classes.navBar}>
            <ul className={classes.navList}>

                {myLinks.map((item, index) => {
                    return (
                        <li key={index} className={classes.navItem}>
                            <Link to={item.toLowerCase()}>
                                {item}
                            </Link>
                        </li>
                    )
                })}

            </ul>
        </nav>
    )
}
