import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Item(props) {
    return (
        <div className="nav-item"><Link to={props.href}>{props.text}</Link></div>
    );
}

export default function Header() {
    return (
        <section className="header">
            <h1>農業小知識</h1>
            <nav className='nav'>
                <Item href="/" text="首頁" />
                <Item href="/about" text="關於我們" />
                <Item href="/info" text="種植資訊"/>
            </nav>
        </section>
    );
}
